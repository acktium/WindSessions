from django.utils.module_loading import import_string
import logging

logger = logging.getLogger(__name__)

class ForumPermissionMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        try:
            ForumPermissionHandler = import_string('machina.apps.forum_permission.handler.PermissionHandler')
            request.forum_permission_handler = ForumPermissionHandler()
        except Exception as e:
            logger.error(f"Error in ForumPermissionMiddleware: {e}", exc_info=True)
        response = self.get_response(request)
        return response