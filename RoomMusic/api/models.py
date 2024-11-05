from django.db import models
import string
import random

#room code generator function


# Create your models here.
class Room(models.Model):
    code = models.CharField(max_length=8, default="", unique=True) # code to access the room
    host = models.CharField(max_length=8, unique=True)
    guest_can_pause = models.BooleanField(null=False, default=False)
    votes_to_skip = models.IntegerField(null=False, default=1)
    created_at = models.DateTimeField(auto_now_add=True)

