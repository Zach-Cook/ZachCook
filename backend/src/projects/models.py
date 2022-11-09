from django.db import models

class Project(models.Model):

    type_choices = (
        ("Web3", "Web3"),
        ("Web2", "Web2")
    )

    Name = models.CharField(max_length=50)
    Type = models.CharField(max_length=10, choices=type_choices)
    LargeImage = models.ImageField(blank=True)
    MobileImage = models.ImageField(blank=True)
    ProjectLink = models.URLField(blank=True)
    RepositoryLink = models.URLField(blank=True)


    def __str__(self, *args, **kwargs):

        return self.Name


