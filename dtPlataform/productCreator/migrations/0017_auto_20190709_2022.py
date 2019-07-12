# Generated by Django 2.2.3 on 2019-07-09 20:22

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('productCreator', '0016_auto_20190709_2019'),
    ]

    operations = [
        migrations.CreateModel(
            name='Questions',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('question_text', models.CharField(max_length=200)),
                ('attributes_ref_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='attributes', to='productCreator.Attributess')),
                ('product_ref_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='product_ref_id', to='productCreator.Productss')),
            ],
        ),
        migrations.AddField(
            model_name='choices',
            name='question_id',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, related_name='question_id', to='productCreator.Questions'),
            preserve_default=False,
        ),
    ]