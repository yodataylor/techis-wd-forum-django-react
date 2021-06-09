from django.urls import path
from . import views

urlpatterns = [
    path('', views.PostList.as_view(), name='post_list'),
    path('add/', views.PostAdd.as_view(), name='post_add'),
    path('<int:pk>/', views.PostDetail.as_view(), name='post_detail'),
    path('delete/<int:pk>/', views.PostDelete.as_view(), name='post_delete'),
    path('likes/add/<int:post_id>/', views.postLikeAdd, name='post_like_add'),
    path('likes/subtract/<int:post_id>/', views.postLikeSubtract, name='post_like_subtract'),
]
