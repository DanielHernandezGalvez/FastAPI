# from fastapi import FastAPI, Form, Response, Request
# from pydantic import BaseModel

# app = FastAPI()


# class ResponseEsquema(BaseModel):
#     mensaje: str


# class LoginEsquema(BaseModel):
#     correo: str
#     password: str

#     class Config:
#         schema_extra = {"ejemplo": {"correo": "correo@gmail", "password": "pass"}}


# @app.get("/ememplo-response-model", response_model=ResponseEsquema)
# async def ejemplo_model():
#     return {"mensaje": "ejemplo response model"}


# @app.get("/ememplo-response-header", response_model=ResponseEsquema)
# async def ejemplo_header(response: Response):
#     response.headers["Kramer"] = "Desde el creador web"
#     return {"mensaje": "ejemplo response header"}

# @app.get("/ejemplo/{id}")
# async def ejemplo_get(id: str):
#     return f"Método GET | parámetro = {type(id)}"


# @app.get("/ejemplo-query")
# async def ejemplo_query(id, slug):
#     return f"id={id} | slug = {slug}"


# # formulario
# @app.post("/ejemplo-form")
# async def form(correo: str = Form(), password: str = Form()):
#     return {"correo": correo, "password": password}


# @app.post("/ejemplo-request")
# async def ejemplo_post_request(model: LoginEsquema):
#     return {"correo": model.correo, "password": model.password}


# @app.post("/ejemplo")
# async def ejemplo_post():
#     return "Método POST"


# @app.put("/ejemplo")
# async def ejemplo_put():
#     return "Método PUT"


# @app.delete("/ejemplo")
# async def ejemplo_delete():
#     return "Método DELETE"


# @app.get("/ejemplo-request-header")
# async def ejemplo_request_header(request: Request):
#     header = request.headers.get("Autorization")
#     return {f"mensaje": "Autorization = {header}"}
