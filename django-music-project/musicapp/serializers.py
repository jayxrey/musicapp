from rest_framework import serializers
from .models import Users, Songs, Ratings, Price

# The serializer translates a Todo object into a format that
# can be stored in our database. We use the Todo model.
class UsersSerializer(serializers.ModelSerializer):
  class Meta:
    model = Users
    fields = ('username','password')

class SongsSerializer(serializers.ModelSerializer):
  class Meta:
    model = Songs
    fields = ('pk', 'song', 'artist', 'album','genre','year')

class RatingsSerializer(serializers.ModelSerializer):
  class Meta:
    model = Ratings
    fields = ('id', 'song', 'rating')

class PriceSerializer(serializers.ModelSerializer):
  class Meta:
    model = Price
    fields = ('song', 'price')
