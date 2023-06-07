from rest_framework.views import APIView
from rest_framework.generics import ListAPIView, CreateAPIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import AllowAny
from django.contrib.auth import get_user_model

from chat.models import Message, Conversation
from chat.serializers import MessageSerializer, ConversationSerializer
from accounts.serializers import UserSerializer

# Create your views here.
class TestView(APIView):
    permission_classes = [AllowAny]

    def get(self, request):
        return Response({"check": "test"})
    

class MessageListView(ListAPIView):
    permission_classes = [AllowAny]
    model = Message
    serializer_class = MessageSerializer
    queryset = Message.objects.all()

class MessageCreateView(CreateAPIView):
    model = Message
    serializer_class = MessageSerializer
    queryset = Message.objects.all()

class ConversationListView(ListAPIView):
    permission_classes = [AllowAny]
    model = Conversation
    serializer_class = ConversationSerializer
    
    def get_queryset(self):
        return Conversation.objects.filter(members__id = 1)
    

class ConversationDetailsView(APIView):
    permission_classes = [AllowAny]

    def get(self, request,*args, **kwargs):
        q = Conversation.objects.filter(id = kwargs['pk'])
        s = ConversationSerializer(q, many=True)
        return Response(s.data)

