<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Student Dealship

Populate DB

```
http://localhost:3000/seed
```

# Ejecutar en desarrollo

1. Clonar el repositorio
2. Ejecutar

```
yarn install
```

3. Tener Nest CLI instalado

```
npm i -g @nestjs/cli
```

4. Levantar la base de datos

```
docker-compose up -d
```

5. Visualizar la BD con TablePlus
5.1 Clic en +
5.2 Seleccionar Mongo (Beta)
5.3 en el campo URL colocar
```
mongodb://localhost:27017/nest-yhaSchool
```

6. Clonar el archivo ```.env.template``` y renorbrar la copia a ```.env```
  
7. Llenar las variables de entorno definidas en el ```.env```

8. Ejecutar la aplicación en dev:
```
yarn start:dev
```

9. Reconstruir la base de datos con la semilla
```
localhost:3000/api/seed
```

## Stack usado

- MongoDB
- Nest


## Production Build
1. Crear el archivo ```.env.prod```
2. Llenar las variables de entorno de prod
3. Crear la nueva imagen
```
docker-compose -f docker-compose.prod.yaml --env-file .env.prod up --build
```