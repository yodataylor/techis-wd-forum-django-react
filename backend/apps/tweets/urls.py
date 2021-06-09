from django.urls import path
from . import views

urlpatterns = [
    path('', views.TweetList.as_view(), name='tweet_list'),
    path('add/', views.TweetAdd.as_view(), name='tweet_add'),
    path('<int:pk>/', views.TweetDetail.as_view(), name='tweet_detail'),
    path('delete/<int:pk>/', views.TweetDelete.as_view(), name='tweet_delete'),
    path('likes/add/<int:tweet_id>/', views.tweetLikeAdd, name='tweet_like_add'),
    path('likes/subtract/<int:tweet_id>/', views.tweetLikeSubtract, name='tweet_like_subtract'),
]
