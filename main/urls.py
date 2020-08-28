from django.urls import path, re_path, include
from main.views import (
    landing,
    postData
)
urlpatterns = [
  path(r'', landing, name="landing"),
  path(r'post/data/', postData, name ='post_data'),
]