from django.contrib import admin

# Register your models here.
from .models import Users, Songs, Ratings, Price

class UsersAdmin(admin.ModelAdmin):
    list_display = ('username', 'password')

class SongsAdmin(admin.ModelAdmin):
    list_display = ('song', 'artist', 'album','genre','year')

class RatingsAdmin(admin.ModelAdmin):
    list_display = ('song','rating')

class PriceAdmin(admin.ModelAdmin):
    list_display = ('song', 'price')


admin.site.register(Songs, SongsAdmin)
admin.site.register(Users, UsersAdmin)
admin.site.register(Ratings, RatingsAdmin)
admin.site.register(Price, PriceAdmin)
