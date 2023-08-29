
const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const setupSwagger = require('./swagger');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Node Js API Project',
      version: '1.0.0'
    },
    servers: [
      {
        url: 'http://localhost:3000/'
      }
    ]
  },
  apis: ['./routes/*.js']
}

const swaggerSpec = swaggerJsDoc(options)
module.exports = (app) => {
app.use('/api-tours',swaggerUi.serve,swaggerUi.setup(swaggerSpec))
};

setupSwagger(app);

const toursRoutes = require('./routes/toursRoutes');
app.use('/tours', toursRoutes);



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
