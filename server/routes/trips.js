const express = require('express');
const router = express.Router();   
const { Trip } = require('../models'); //Trip is what we exported from the models file

router.get('/', async (req, res) => {
    const listOfTrips = await Trip.findAll();
    res.json(listOfTrips);

}
);

router.post('/', async (req, res) => {
    const tirp_input= req.body;
    await Trip.create(tirp_input);
    res.json(tirp_input);
}
);


module.exports = router;