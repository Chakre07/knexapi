const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Tours API',
      version: '1.0.0',
    },
    servers: [
      {
        url: 'http://localhost:3000'
      }
    ]
  },
  components: {
    schemas: {
      Tour: {
        type: 'object',
        require: ['name', 'price' , 'duration'],
        properties: {
          name: {
            type: 'string',
            description: 'The name of the place/tour'
          },
          price: {
            type: 'integer',
            description: 'Price of the tour'
          },
          description: {
            type: 'string',
            description: 'Description about the tour'
          },
          duration: {
            type: 'integer',
            description: 'Time it takes'
          }
        }
      }
    }
  },
  apis: ['./routes/toursRoutes.js'], // Path to the API routes files
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};
