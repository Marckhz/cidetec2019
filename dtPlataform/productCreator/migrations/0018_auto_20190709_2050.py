# Generated by Django 2.2.3 on 2019-07-09 20:50

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('productCreator', '0017_auto_20190709_2022'),
    ]

    operations = [
        migrations.RenameField(
            model_name='attributess',
            old_name='attribute',
            new_name='attribute_id',
        ),
    ]