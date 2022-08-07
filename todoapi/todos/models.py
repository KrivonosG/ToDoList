from django.db import models


class Users(models.Model):
    user_name = models.CharField(max_length=64)
    first_name = models.CharField(max_length=64)
    last_name = models.CharField(max_length=64)
    birth_date = models.PositiveIntegerField()
    email = models.EmailField(max_length=100, unique=True)

