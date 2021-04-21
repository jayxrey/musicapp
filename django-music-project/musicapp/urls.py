from django.contrib import admin
from django.urls import path, re_path
from musicapp import views
from django.conf.urls import url

urlpatterns = [
    path('admin/', admin.site.urls),
    re_path(r'^api/songs/$', views.songs_list),
    re_path(r'^api/songs/([0-9])$', views.songs_detail),
]
