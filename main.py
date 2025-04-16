from fastapi import FastAPI, Form

app = FastAPI()


@app.get("/ejemplo/{id}")
async def ejemplo_get(id:str):
    return f"Método GET | parámetro = {type(id)}"

@app.get("/ejemplo-query")
async def ejemplo_query(id, slug):
    return f"id={id} | slug = {slug}"

# formulario
@app.post("/ejemplo-form")
async def form(correo: str=Form(), password: str=Form()):
    return {"correo": correo, "password": password}


@app.post("/ejemplo")
async def ejemplo_post():
    return "Método POST"


@app.put("/ejemplo")
async def ejemplo_put():
    return "Método PUT"


@app.delete("/ejemplo")
async def ejemplo_delete():
    return "Método DELETE"
