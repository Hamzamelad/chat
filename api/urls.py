from django.urls import path, include
from .views import TestView, MessageListView, MessageCreateView, ConversationListView, ConversationDetailsView
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView


urlpatterns = [
    path('test/', TestView.as_view(), name="test"),

    path("token/", TokenObtainPairView.as_view(), name="access"),
    path("token/refresh/", TokenRefreshView.as_view(), name="refresh"),

    path('dj/', include('dj_rest_auth.urls')),
    path('dj-reg/', include('dj_rest_auth.registration.urls')),

    path('messages/list/', MessageListView.as_view(), name="messages_list"),
    path('messages/create/', MessageCreateView.as_view(), name="messages_create"),
    path('conversation/list/', ConversationListView.as_view(), name='conversations_list'),
    path('conversation/<int:pk>/', ConversationDetailsView.as_view(), name='conversations_details')
]