from django.db import models

class Post(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    image_url = models.URLField(null=True, blank=True) 
    profile_url = models.URLField(null=True, blank=True) 
    
    def __str__(self):
        return self.title