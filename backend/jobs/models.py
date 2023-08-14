from django.db import models

class user(models.Model):
    username = models.CharField(primary_key = True, max_length=50)
    password = models.CharField(max_length=20)
    nama = models.CharField(max_length=20)

    def __str__(self):
        return self.username


class magang(models.Model):
    judul = models.CharField(max_length=50)
    jurusan = models.CharField(max_length=50)
    deskripsi = models.TextField()
    deadline = models.DateField()
    publish = models.DateTimeField()
    nama_id = models.ForeignKey(user, null=True, blank=True, on_delete=models.CASCADE)
    is_closed = models.BooleanField(default=True, null=None, blank=None)
    file = models.FileField(upload_to='file/', blank=True)

    def __str__(self):
        return self.judul