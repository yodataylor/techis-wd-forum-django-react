from .models import Tweet
from rest_framework import serializers


class TweetSerializer(serializers.ModelSerializer):
    image = serializers.ImageField(allow_null=True)

    class Meta:
        model = Tweet
        fields = '__all__'
