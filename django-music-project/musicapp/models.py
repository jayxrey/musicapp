from django.db import models


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
    user = models.CharField(max_length=200)

class Price(models.Model):
    song = models.ForeignKey(Songs, on_delete=models.CASCADE)
    price = models.IntegerField(default=0)

    def __str__(self):
        return self.price
