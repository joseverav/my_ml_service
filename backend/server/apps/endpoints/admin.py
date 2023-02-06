from django.contrib import admin


# Import models 
from apps.endpoints.models import Endpoint #, MLAlgorithm, MLRequest

# Create a class for the admin-model integration
class MLAdmin(admin.ModelAdmin):

    # add the fields of the model here
    list_display = ("name", "owner" , "created_at")

# Register model class and admin model class
admin.site.register(Endpoint, MLAdmin)