# Generated by Django 3.2 on 2021-04-23 23:06

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('musicapp', '0003_users_last_login'),
    ]

    operations = [
        migrations.DeleteModel(
            name='Users',
        ),
    ]