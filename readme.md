# Intrucciones 
- una vez clonado el repositorio correr en terminal `npm install`
- en archivo `app.js` se encuentra variable `numbers` (linea 17) 
- correr script con `npm start`
- correr tests con `npm run test`
# Intrucciones con docker
- para ejecutar con los numeros de `app.js` variable `numbers` (linea 17) 
- simplemente se debe correr `docker build -t segundo . && docker run segundo npm start`
- para correr tests `docker build -t segundo . && docker run segundo npm run test`
### Respuestas
- **¿De qué forma guardarías los archivos que un usuario suba por la aplicación al servidor
y porque?**
    - trataria de usar un servidor de archivos, si bien se pueden subir archivos al servidor de la api creo que lo mejor es usar un servidor dedicado al almacenamiento de estos archivos
- **¿Implementaría un cache del lado del cliente? ¿Porque?**
    - si es bastante util para que cargue la web mas rapido, en especial imagenes