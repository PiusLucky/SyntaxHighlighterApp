from django import template
from pygments.lexers import get_all_lexers
from pygments.styles import get_all_styles



register = template.Library()


@register.filter(name='limit_lexer')
def limit_lexer(arg):
  """Limit the lexer by 20"""
  lexers = [(each_lang[1][0], each_lang[0]) for each_lang in get_all_lexers()][:20]
  return lexers


@register.filter(name='limit_style')
def limit_style(arg):
  """Limit the lexer by 16"""
  styles_obj = sorted(get_all_styles())
  styles = [each_lang for each_lang in styles_obj][:16] 
  return styles
