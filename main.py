from fastapi import FastAPI
from api import api

app = FastAPI()

api.include_router(api)