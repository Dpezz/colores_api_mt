# colors API

Aplicación API que crea y muestra listado de colores.

## Frameworks y herramientas utilizadas

-   nodejs
-   expressjs
-   mySQL

## Instalar y correr el proyecto

```bash
# iniciar proyecto
$ git clone https://github.com/Dpezz/colores_api_mt.git
$ cd colores_api_mt/
$ npm install

# configurar archivos
  .env
  database/database.json

# correr migracion y seeder `sequelize`:
$ ./node_modules/.bin/sequelize db:create #create database
$ ./node_modules/.bin/sequelize db:migrate #run migrate
$ ./node_modules/.bin/sequelize db:seed:all #run seeders

- or -

npx sequelize-cli db:create #create database
npx sequelize-cli db:migrate #run migrate
npx sequelize-cli db:seed:all #run seeders

# iniciar proyecto localhost:8000
$ npm start
start server [http://localhost:8000/api](http://localhost:8000/api)
```

```bash
- versiones usadas: (Node: 12.16.0, NPM: 6.13.4, CLI: 5.5.1, ORM: 5.21.7)
```

## Authors

Developed by [Daniel Jara Pezzuoli](http://dpezz.me).
For help, please contact the [mail](mailto:jara.pezzuoli@gmail.com).

:-)
