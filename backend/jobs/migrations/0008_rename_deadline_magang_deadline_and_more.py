# Generated by Django 4.2.4 on 2023-08-22 04:52

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('jobs', '0007_remove_user_email_alter_magang_nama_id_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='magang',
            old_name='Deadline',
            new_name='deadline',
        ),
        migrations.RenameField(
            model_name='magang',
            old_name='Deskripsi',
            new_name='deskripsi',
        ),
        migrations.RenameField(
            model_name='magang',
            old_name='Judul',
            new_name='judul',
        ),
        migrations.RenameField(
            model_name='magang',
            old_name='Jurusan',
            new_name='jurusan',
        ),
        migrations.RenameField(
            model_name='magang',
            old_name='Nama_id',
            new_name='nama_id',
        ),
        migrations.RenameField(
            model_name='magang',
            old_name='Publish',
            new_name='publish',
        ),
    ]
