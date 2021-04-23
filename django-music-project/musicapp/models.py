from django.db import models


class Users(models.Model):
    username = models.CharField(max_length=200, primary_key=True, unique=True)
    password = models.CharField(max_length=200)

    def __str__(self):
        return self.username

class Songs(models.Model):

    song = models.CharField(max_length=200)
    artist = models.CharField(max_length=200)
    album = models.CharField(max_length=200, default='single')
    genre = models.CharField(max_length=200, default='none')
    year = models.IntegerField(default=0)

    def __str__(self):
        return self.song

class Ratings(models.Model):
    song = models.ForeignKey(Songs, on_delete=models.CASCADE)
    rating = models.IntegerField(default=0)



class Price(models.Model):
    song = models.ForeignKey(Songs, on_delete=models.CASCADE)
    price = models.IntegerField(default=0)

    def __str__(self):
        return self.price
