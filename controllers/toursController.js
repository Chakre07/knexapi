

const knex = require('knex')(require('../knexfile').development);
// const {validationSchema} = require('validator/validator')
const Joi = require('joi');

const validationSchema = Joi.object({
  price: Joi.number().min(0).required(),
  name: Joi.string().pattern(/^[A-Za-z]/).max(50).required(),
  description: Joi.string().max(250),
  duration: Joi.number(),
});
module.exports = {
  /**
   * create tour based on request body
   * @param {*} req 
   * @param {*} res 
   * @returns 
   */
  async createTour(req, res) {
    try {
      // validate each request from frontend
      console.log(req.body)
      const {errors, value} = validationSchema.validate(req.body)
      console.log(errors)
      if(errors){
        return res.status(400).json({ errors: errors.details });
      }

      // insert into tours table only if all the body pass validation.
      const { price, name, description, duration } = value;

      const tour = await knex('tours').insert({
        price, name, description, duration
      });
      // return response once request.body is saved.
      console.log(tour)
      res.status(201).json({ message: 'Tour created successfully', tour });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'An error occurred' });
    }
  },

  async getAllTours(req, res) {
    try {
      const tours = await knex('tours');
      res.json(tours);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'An error occurred' });
    }
  },

  async getTourById(req, res) {
    const { id } = req.params;
    try {
      const tour = await knex('tours').where({ id }).first();
      if (!tour) {
        return res.status(404).json({ message: 'Tour not found' });
      }
      res.json(tour);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'An error occurred' });
    }
  },

  async updateTour(req, res) {
    const { id } = req.params;
    try {
      await knex('tours').where({ id }).update(req.body);
      res.json({ message: 'Tour updated successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'An error occurred' });
    }
  },

  async deleteTour(req, res) {
    const { id } = req.params;
    try {
      await knex('tours').where({ id }).del();
      res.json({ message: 'Tour deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'An error occurred' });
    }
  },
};
