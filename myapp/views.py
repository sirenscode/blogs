from django.shortcuts import render, redirect
from .models import Post
from  rest_framework.response import Response
from rest_framework import generics
from .serializers import PostSerializer
from .forms import PostForm

def post_list(request):
    #posts = Post.objects.all()
    return Response({"message":"Hello world"})
def delete(request):
    Post.objects.all().delete()
    return Response({"message":"All data deleted"})

def create_post(request):
    if request.method == 'POST':
        form = PostForm(request.POST)
        if form.is_valid():
            form.save()
            return Response({"message":"Data Stored"})
    else:
        form = PostForm()
    return Response({"form":form})

class PostListCreate(generics.ListCreateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer