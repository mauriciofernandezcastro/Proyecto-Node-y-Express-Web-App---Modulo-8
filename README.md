Proyecto Node y Express Web App - Modulo 8

Descripcion: API RESTful para gestion de usuarios y productos con base de datos, subida de archivos y autenticacion JWT.

Instalacion:
1. npm install
2. crear archivo .env con SECRET_JWT=mi_clave_secreta y DB_URL
3. npm run dev

Endpoints principales:
POST /api/auth/register - registro
POST /api/auth/login - login y devuelve token
GET /api/perfil - ruta protegida, necesita token
GET /api/usuarios - ruta protegida
POST /api/upload - subida de imagen

Como autenticarse:
1. Hacer POST a /api/auth/login con email y password
2. Copiar el token que devuelve
3. En Postman ir a Headers y poner Authorization: Bearer token

Validaciones: se valida extension de archivo, tamaño, email valido, y manejo de errores 401 token requerido y 403 token invalido.
Base de datos: MongoDB con Mongoose o PostgreSQL con Sequelize
