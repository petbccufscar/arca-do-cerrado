from django import forms
from ckeditor.widgets import CKEditorWidget
from .models import Postagem, Planta, Atividade, Equipe

class PostagemForm(forms.ModelForm):
    conteudo = forms.CharField(widget=CKEditorWidget())

    class Meta:
        model = Postagem
        fields = '__all__'

class PlantaForm(forms.ModelForm):
    resumo = forms.CharField(widget=CKEditorWidget())
    texto = forms.CharField(widget=CKEditorWidget())

    class Meta:
        model = Planta
        fields = '__all__'

class AtividadeForm(forms.ModelForm):
    descricao = forms.CharField(widget=CKEditorWidget())

    class Meta:
        model = Atividade
        fields = '__all__'

class EquipeForm(forms.ModelForm):
    biografia = forms.CharField(widget=CKEditorWidget())

    class Meta:
        model = Equipe
        fields = '__all__'