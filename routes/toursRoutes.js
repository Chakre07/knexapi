// routes/toursRoutes.js
const express = require('express');
const router = express.Router();
const toursController = require('../controllers/toursController');

/**
 * @swagger
 * tags:
 *   name: Tours
 *   description: API for managing tours
 */

/**
 * @swagger
 * /tours:
 *   post:
 *     summary: Create a new tour
 *     tags: [Tours]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               price:
 *                 type: number
 *               duration:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Tour created successfully
 *         content:
 *           application/json:
 *             example:
 *               message: Tour created successfully
 */
//app.post('/tours', toursController.createTour);





router.post('/', toursController.createTour);
router.get('/', toursController.getAllTours);
router.get('/:id', toursController.getTourById);
router.put('/:id', toursController.updateTour);
router.delete('/:id', toursController.deleteTour);

module.exports = router;
