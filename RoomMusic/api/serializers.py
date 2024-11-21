#a serializer turns the model and informatioin to JSON, i.e also tracking for changes in models
from rest_framework import serializers
from .models import Room

class RoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Room
        fields = ('id', 'code', 'host', 'guest_can_pause', 'votes_to_skip')

class CreateRoomSerialize(serializers.ModelSerializer):  #post request (create)
    class Meta:
        model = Room
        fields = ('guest_can_pause', 'votes to skip')