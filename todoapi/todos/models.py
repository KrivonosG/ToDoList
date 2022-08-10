from django.db import models


class User(models.Model):
    user_name = models.CharField(max_length=64)
    first_name = models.CharField(max_length=64)
    last_name = models.CharField(max_length=64)
    birth_date = models.DateField()
    email = models.EmailField(max_length=100, unique=True)

