from rest_framework import generics
from .serializers import PostSerializer
from django.http import JsonResponse
from .models import Post


class PostList(generics.ListAPIView):
    # Get all posts, limit = 20
    queryset = Post.objects.order_by('created_at').reverse().all()[:20]
    serializer_class = PostSerializer


class PostAdd(generics.CreateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer


class PostDetail(generics.RetrieveAPIView, generics.UpdateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer


class PostDelete(generics.DestroyAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer


def postLikeAdd(request, post_id):
    # Get requested post
    post = Post.objects.get(id=post_id)

    # Add count
    new_like_count = post.like_count + 1
    post.like_count = new_like_count

    # Save
    post.save()

    return JsonResponse({'result': 'successful'})


def postLikeSubtract(request, post_id):
    # Get requested post
    post = Post.objects.get(id=post_id)

    # Subtract count
    new_like_count = post.like_count - 1
    post.like_count = new_like_count

    # Save
    post.save()

    return JsonResponse({'result': 'successful'})
