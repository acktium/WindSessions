from django_elasticsearch_dsl import Document, fields
from django_elasticsearch_dsl.registries import registry
#from .models import YourModel  # Replace with your actual model

@registry.register_document
class YourModelDocument(Document):
    class Index:
        # Name of the Elasticsearch index
        name = 'yourmodel_index'
        # See Elasticsearch Indices API reference for available settings
        settings = {
            'number_of_shards': 1,
            'number_of_replicas': 0
        }

    # class Django:
    #     model = YourModel  # The model associated with this Document

    #     fields = [
    #         'field1',  # Add your model fields here
    #         'field2',
    #         # ...
    #     ]