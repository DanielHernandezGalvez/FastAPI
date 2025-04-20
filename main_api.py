from fastapi import APIRouter, status
from fastapi.responses import HTMLResponse, FileResponse, StreamingResponse

api = APIRouter()


@api.get("/ejemplo", status_code=status.HTTP_200_OK)
async def ejemplo():
    return {"mensaje": "mensaje perrón"}


@api.get("/ejemplo-html", status_code=status.HTTP_200_OK, response_class=HTMLResponse)
async def ejemplo_html():
    return "<h1> hola desde h1</h1>"


@api.get("/ejemplo-foto", status_code=status.HTTP_200_OK)
async def ejemplo_foto():
    return FileResponse("./ruta-de-la-imagen")


@api.get("/ejemplo-foto", status_code=status.HTTP_200_OK)
async def ejemplo_video():
    def interfile():
        with open("./some_file_path", mode="rv") as file_like:
            yield from file_like

        return StreamingResponse(interfile(), media_type="video/mp4")
