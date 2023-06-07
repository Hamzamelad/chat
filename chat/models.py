from django.db import models

# Create your models here.
class Message(models.Model): 
    text = models.CharField(max_length=50, null=True, blank=True)
    # picture = models.ImageField(upload_to=None, null=True, blank=True)
    # date = models.DateTimeField(auto_now=False)
    sender = models.ForeignKey("accounts.User", on_delete=models.CASCADE, related_name='sended')
    receiver = models.ForeignKey("accounts.User", on_delete=models.CASCADE, related_name='received')
    conversation = models.ForeignKey("chat.Conversation", related_name='messeges', on_delete=models.PROTECT, null=True, blank=True)
    img = models.ImageField(upload_to='messeges/', null=True, blank=True)

    def __str__(self) -> str:
        return super().__str__()


class Conversation(models.Model):
    members = models.ManyToManyField("accounts.User", related_name='conversations')

    def __str__(self) -> str:
        return "conversation: [" + ''.join([(m.username + ' ') for m in self.members.all()]) + "]"