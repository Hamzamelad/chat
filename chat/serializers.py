from rest_framework import serializers
from .models import Message, Conversation


class MessageSerializer(serializers.ModelSerializer):

    class Meta:
        model = Message
        fields = "__all__"

class ConversationSerializer(serializers.ModelSerializer):
    members = serializers.SerializerMethodField()
    messeges = serializers.SerializerMethodField()

    def get_members(self,obj):
        print(obj)
        return [m.username for m in obj.members.all()]
    
    def get_messeges(self, obj):
        mess = []
        for m in obj.messeges.all():
            if m.img :
                mess.append({"text":m.text, "sender": m.sender.id,"img": m.img.url })
            else:
                mess.append({"text":m.text, "sender": m.sender.id,"img": None})
                
        return mess

    class Meta:
        model = Conversation
        fields = ['id','members', 'messeges']