from django.http import HttpResponse
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from .models import Users, Songs, Ratings, Price
from .serializers import *
from django.template import loader


@api_view(['GET', 'POST'])
def songs_list(request):
    if request.method == 'GET':
        data = Songs.objects.all()

        serializer = SongsSerializer(data, context={'request': request}, many=True)

        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = SongsSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'POST'])
def ratings_list(request):
    if request.method == 'GET':
        data = Ratings.objects.all()

        serializer = RatingsSerializer(data, context={'request': request}, many=True)

        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = RatingsSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT', 'DELETE'])
def songs_detail(request, pk):
    try:
        song = Songs.objects.get(pk=pk)
    except Songs.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'PUT':
        serializer = SongsSerializer(song, data=request.data,context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        song.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

@api_view(['GET', 'POST'])
<<<<<<< HEAD
def ratings_detail(request, song):
    try:
        ratings = Ratings.objects.get(song=song)
    except Ratings.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'PUT':
        serializer = RatingsSerializer(ratings, data=request.data,context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        ratings.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
=======
def songs_ratings_list(request, song):
    if request.method == 'GET':
        try:
            ratings = Ratings.objects.filter(song_id = song)
        except Ratings.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        serializer = RatingsSerializer(ratings, context={'request': request}, many=True)

        return Response(serializer.ratings)

    elif request.method == 'POST':
        serializer = RatingsSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


>>>>>>> aff47da9f1a3e4b4d83a5a9c87d2d1de786beca9
