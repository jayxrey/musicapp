from django.http import HttpResponse
from django.shortcuts import render
from rest_framework import permissions, status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.decorators import api_view, permission_classes
from .models import Songs, Ratings, Price
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

@api_view(['PUT', 'GET'])
def songs_ratings_list(request):
    if request.method == 'GET':
        #song = Songs()
        #song.song = request.GET.get('song')
        try:
            data = Ratings.objects.all()
        except Ratings.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        serializer = RatingsSerializer(data, context={'request': request}, many=True)

        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = RatingsSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def song_rating_details(request, song):
    if request.method == 'GET':
        try:
            data = Ratings.objects.filter(song= song)
        except Songs.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        serializer = RatingsSerializer(data, context={'request': request}, many=True)

        return Response(serializer.data)

@api_view(['GET'])
def current_user(request):
    serializer = UserSerializer(request.user)
    return Response(serializer.data)

class UserList(APIView):
    permission_classes = (permissions.AllowAny,)

    def post(self, request, format=None):
        serializer = UserSerializerWithToken(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
