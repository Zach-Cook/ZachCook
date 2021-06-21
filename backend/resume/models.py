from django.db import models
import datetime

class Resume(models.Model):

    DateAdded = models.DateTimeField(auto_now_add=True)
    Resume = models.FileField()

    def __str__(self):
        return str(self.id) +  " " + self.DateAdded.strftime("%A, %d %b %Y, %H:%M")

