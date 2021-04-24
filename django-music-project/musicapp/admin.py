from django.contrib import admin

# Register your models here.
from .models import Songs, Ratings, Price

class SongsAdmin(admin.ModelAdmin):
    list_display = ('song', 'artist', 'album','genre','year')

class RatingsAdmin(admin.ModelAdmin):
    list_display = ('song','rating')

class PriceAdmin(admin.ModelAdmin):
    list_display = ('song', 'price')


admin.site.register(Songs, SongsAdmin)
admin.site.register(Ratings, RatingsAdmin)
admin.site.register(Price, PriceAdmin)
