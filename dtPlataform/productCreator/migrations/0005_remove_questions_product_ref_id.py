# Generated by Django 2.2.3 on 2019-07-04 02:09

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('productCreator', '0004_auto_20190704_0203'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='questions',
            name='product_ref_id',
        ),
    ]
