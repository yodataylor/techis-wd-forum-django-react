from rest_framework import generics
from .serializers import TweetSerializer
from django.http import JsonResponse
from .models import Tweet


class TweetList(generics.ListAPIView):
    # Get all tweets, limit = 20
    queryset = Tweet.objects.order_by('created_at').reverse().all()[:20]
    serializer_class = TweetSerializer


class TweetAdd(generics.CreateAPIView):
    queryset = Tweet.objects.all()
    serializer_class = TweetSerializer


class TweetDetail(generics.RetrieveAPIView, generics.UpdateAPIView):
    queryset = Tweet.objects.all()
    serializer_class = TweetSerializer


class TweetDelete(generics.DestroyAPIView):
    queryset = Tweet.objects.all()
    serializer_class = TweetSerializer


def tweetLikeAdd(request, tweet_id):
    # Get requested tweet
    tweet = Tweet.objects.get(id=tweet_id)

    # Add count
    new_like_count = tweet.like_count + 1
    tweet.like_count = new_like_count

    # Save
    tweet.save()

    return JsonResponse({'result': 'successful'})


def tweetLikeSubtract(request, tweet_id):
    # Get requested tweet
    tweet = Tweet.objects.get(id=tweet_id)

    # Subtract count
    new_like_count = tweet.like_count - 1
    tweet.like_count = new_like_count

    # Save
    tweet.save()

    return JsonResponse({'result': 'successful'})
