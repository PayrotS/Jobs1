from rest_framework import serializers
from .models import magang,user

class MagangSerializers(serializers.ModelSerializer):
    class Meta:
        model = magang
        fields = ["id", "judul", "jurusan", "deskripsi", "deadline", "publish", "nama_id", "is_closed", "file"]
    
class UserSerializers(serializers.ModelSerializer):
    class Meta:
        model = user
        fields = ["username", "password", "nama"]