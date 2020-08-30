from django.shortcuts import render
from django.shortcuts import get_object_or_404, redirect
from pygments.lexers import get_all_lexers
from pygments.styles import get_all_styles
from .utils import BeautifyCode, DefaultStyle
from urllib.parse import unquote
from django.http import JsonResponse


def landing(request):
  template = "index.html"
  lexer_object = get_all_lexers()
  lexers = [(each_lang[1][0], each_lang[0]) for each_lang in lexer_object]
  editor_styles = sorted(get_all_styles())
  context = {
    "lexers":lexers,
    "editor_styles":editor_styles
  }
  return render(request, template, context)


def postData(request):
  if request.method == 'POST' and request.is_ajax():
    textarea_field = [] 
    for key in request.POST:  
      textarea_field.append(request.POST[key])
    textarea_field = unquote(textarea_field[0].split("&")[-1].split("=")[-1])
    defaults = {
      "language": "js", 
      "style": "default",
      "type": "dark",
      "git": "true",
      "lnb": "false",
      "bdclr": "rgb(92, 77, 92);",
      "bdwidth": "1rem .1rem 1rem .1rem",
      "bdr": ".7rem",
      "pdd": "1rem"
    }
    
    def cookieRequest(name, val):
      cookie_request = request.COOKIES[name] or defaults[val]
      return cookie_request

    lexer = cookieRequest("CurrentLanguage", "language")
    style = cookieRequest("CurrentStyle", "style")
    line_number = cookieRequest("LineNumber", "lnb")
    line_number_color = cookieRequest("LineNumberColor", "type")
    generator_initial_text = cookieRequest("GeneratorInitialText", "git")
    border_color = cookieRequest("BorderColor", "bdclr")
    border_width = cookieRequest("BorderWidth", "bdwidth")
    border_radius = cookieRequest("BorderRadius", "bdr")
    padding = cookieRequest("Padding", "pdd")

    if generator_initial_text == "true":
      generator_initial_text = True
    else:
      generator_initial_text = False

    if line_number == "true":
      line_number = True
    else:
      line_number = False

    get_new_styles = DefaultStyle(border_color, border_width, padding, border_radius)
    final_styles = get_new_styles.get_style()
    beautifier_object = BeautifyCode(textarea_field, lexer, {}, style, line_number, final_styles, generator_initial_text)
    code_beautify = beautifier_object.getBeautifier()
    html = code_beautify["html"]
    theme_background = code_beautify["theme_background"]
    upper_style = code_beautify["css_styles"]   
    context = {
      "html_code":html,
      "lexer":lexer,
      "style":style,
      "line_number":line_number,
      "custom_border":final_styles,
      "line_number_color":line_number_color,
      "upper_style":upper_style,
      "theme_background":theme_background
    }
    return JsonResponse({"success":True, "data":context}, status=200)
  return JsonResponse({"success":False}, status=400)


def csrf_byepass(request, reason=""):
    # return same page
    return redirect(request.META['HTTP_REFERER']) 


  



