"""musicdb URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))


"""
"""
try re_path(r'^current_user/$', views.current_user), if not working
"""
from django.contrib import admin
from django.urls import path, re_path
from musicapp import views
from django.conf.urls import url
from rest_framework_jwt.views import obtain_jwt_token, refresh_jwt_token


urlpatterns = [
    path('admin/', admin.site.urls),
    path('users/', views.UserList.as_view()),
    path('token-auth/', obtain_jwt_token),
    path('token-auth/refresh', refresh_jwt_token),
    path('current_user/', views.current_user),
    re_path(r'^api/songs/$', views.songs_list),
    re_path(r'^api/songs/(?P<pk>\d+)/$', views.songs_detail),
    re_path(r'^api/ratings/$', views.songs_ratings_list),
    re_path(r'^api/ratings/(?P<song>\d+)/$', views.song_rating_details),
]
