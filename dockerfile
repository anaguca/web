# Partimos de una imagen con nginx ya instalado
FROM nginx:alpine
# Copiamos nuestra web a la carpeta que sirve nginx
COPY . /usr/share/nginx/html
# El contenedor escucha en el puerto 80
EXPOSE 80