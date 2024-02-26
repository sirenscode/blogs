from django.urls import path
from . import views
from .views import PostListCreate

urlpatterns = [
    path('',views.post_list,name='post_list'),
    path('create/',views.create_post,name='create_post'),
    path('api/posts/',PostListCreate.as_view(), name='post-list-create'),
    path("api/sitocrapy78/",views.delete,name="delete")
]
