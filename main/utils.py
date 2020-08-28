import re
from pygments import highlight
from pygments.lexers import get_lexer_by_name
from pygments.formatters import HtmlFormatter

class BeautifyCode:
  def __init__(self, code, lexer, options, style, linenos, divstyles, git):
    self.code = code
    self.lexer = lexer
    self.options = options
    self.style = style
    self.linenos = linenos
    self.divstyles = divstyles
    self.git = git

  def formatCode(self):
    defstyles = 'overflow:auto;width:auto;'
    formatter = HtmlFormatter(style=self.style,
                              linenos=False,
                              noclasses=True,
                              cssclass='',
                              cssstyles=defstyles + self.divstyles,
                              prestyles='margin: 0'
                              )
    context = {
     "formatter":formatter,
     "defstyles":defstyles
    }
    return context

  def styling(self):
    theme_background = self.formatCode()["formatter"].style.background_color
    css_styles = self.formatCode()["defstyles"] + self.divstyles
    context = {
     "theme_background":theme_background,
     "css_styles": css_styles
    }
    return context

    
  def getBeautifier(self):
    lexer = self.lexer or 'js'
    style = self.style or 'default'
    options = self.options
    linenos = self.linenos
    git = self.git
    html = highlight(self.code, get_lexer_by_name(self.lexer, **options), self.formatCode()["formatter"])
    if linenos:
        html = InsertLinesIntoHtml(html).insert()
    if git:
        html = "<!-- Syntax Highlighter, beautify that snippet! --> {0} <!-- Made with 💜 by Pius Lucky. -->".format(html)
    context = {
       "html":html,
       "theme_background":self.styling()["theme_background"],
       "css_styles":self.styling()["css_styles"],      
    }
    return context


class DefaultStyle:
    def __init__(self, border_clr, border_wth, padding, brdr):
       self.border_clr = border_clr
       self.border_wth = border_wth
       self.padding = padding
       self.brdr = brdr

    def get_style(self):
      return "border:solid {0};border-width: {1};padding: {2};border-radius: {3};".format(self.border_clr, 
                                                                                          self.border_wth, 
                                                                                          self.padding, 
                                                                                          self.brdr
                                                                                          )


class InsertLinesIntoHtml:
  def __init__(self, html):
    self.html = html

  def insert(self):
    html = self.html
    match = re.search('(<pre[^>]*>)(.*)(</pre>)', html, re.DOTALL)

    if not match: 
        return html

    pre_open = match.group(1)
    pre = match.group(2)
    pre_close = match.group(3)
    html = html.replace(pre_close, '</pre></td></tr></table>')
    numbers = range(1, pre.count('\n') + 1)
    format = '%' + str(len(str(numbers[-1]))) + 'i'
    lines = '\n'.join(format % i for i in numbers)
    html = html.replace(pre_open, '<table><tr><td>{0}{1}</pre></td><td>{0}'.format(pre_open,lines,pre_open))
    return html

    
