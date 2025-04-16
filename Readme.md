# instalar entono virtual
pip install virtualenv

# crear entorno
virtualenv env_name

# activar entorno
.\env_name\Scripts\activate

# instalar librerias necesarioas para fastapi
pip install fastapi
pip install uvicorn

_las instalaciones se pueden hacer desde el requirements.txt_
pip install -r requirements.txt

# ejecutar en navegador
uvicorn main:app --reload
# en caso de requerir poner mi ip
uvicorn main:app host numero de ip --reload

