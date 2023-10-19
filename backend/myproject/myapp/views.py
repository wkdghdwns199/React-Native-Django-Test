from django.shortcuts import render
from django.http import JsonResponse

# Create your views here.
def get_data(request):
    data={'message': 'Hello from Django!'}
    return JsonResponse(data)
