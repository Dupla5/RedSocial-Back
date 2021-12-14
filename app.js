const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const app = express();
//Inicializacion de Swagger
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.set('config', path.join(__dirname, 'config'));
app.use(cors({origin:'*'}));

/** Swagger Initialization - START */
const swaggerOption = {
  swaggerDefinition: (swaggerJsdoc.Options = {
    info: {
      title: "BackEnd Tecla",
      description: "Documentación de la API de la Red Social Tecla ",
      contact: {
        name: "Developer",
      },
      servers: ["http://localhost:4000/"],
    },
  }),
  apis: ["app.js", "./routes/*.js"],
};

const swaggerDocs = swaggerJsdoc(swaggerOption);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
/** Swagger Initialization - END */


//Rutas
let helpsRoutes = require('./routes/helps.route.js');
let coursesRoutes = require('./routes/courses.route.js');
let studiesRoutes = require('./routes/studies.route.js');
let lenguagesRoutes = require('./routes/lenguages.route.js');
let hobbiesRoutes = require('./routes/hobbies.route');
let postsRoutes = require('./routes/posts.route');
let usersRoutes = require('./routes/users.route');


app.use('/users', usersRoutes);
app.use('/posts', postsRoutes);
app.use('/hobbies',hobbiesRoutes);
app.use('/lenguages', lenguagesRoutes);
app.use('/studies', studiesRoutes);
app.use('/courses',coursesRoutes);
app.use('/helps', helpsRoutes);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json('error');
});

module.exports = app;
