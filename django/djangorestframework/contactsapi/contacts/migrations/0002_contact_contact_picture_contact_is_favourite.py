# Generated by Django 4.0 on 2021-12-15 00:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('contacts', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='contact',
            name='contact_picture',
            field=models.URLField(null=True),
        ),
        migrations.AddField(
            model_name='contact',
            name='is_favourite',
            field=models.BooleanField(default=True),
        ),
    ]
