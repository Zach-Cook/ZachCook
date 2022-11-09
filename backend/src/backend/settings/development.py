from .base import *


# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = ["*"]

CORS_ORIGIN_WHITELIST = [
    "http://localhost:3000",
    "http://localhost:3001",
    "http://172.16.1.237:3000",
    "http://192.168.1.39:3000",
    "http://192.168.1.131:3000",
    "http://192.168.1.253:3000"
]

CORS_ALLOW_HEADERS = [
    'accept',
    'accept-encoding',
    'authorization',
    'content-type',
    'dnt',
    'origin',
    'user-agent',
    'x-csrftoken',
    'x-requested-with',
]

