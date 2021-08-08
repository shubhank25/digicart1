const Model = require('../models/cartModel');
const router = require('express').Router();


router.get('/home', (req, res) => {
    res.send("Welcome User Home");
})


router.post('/add', (req, res) => {
    data = req.body;

    new Model(data).save()
        .then(data => {
            console.log('user data saved');
            res.status(200).json({ message: 'success' });
        })
        .catch(err => {
            console.error(err);
            res.status(500).json(err);
        })
})


router.get('/getbyemail/:email', (req, res) => {

    Model.findOne({ email: req.params.eml })
        .then(data => {
            console.log('user data saved');
            res.status(200).json(data);
        })
        .catch(err => {
            console.error(err);
            res.status(500).json(err);
        })
})

router.get('/getall', (req, res) => {

    Model.find({})
        .then(data => {
            console.log('user data fetched');
            res.status(200).json(data);
        })
        .catch(err => {
            console.error(err);
            res.status(500).json(err);
        })
})

router.get('/getbyuser/:id', (req, res) => {

    Model.find({user : req.params.id})
        .then(data => {
            console.log('cart data fetched by  userid');
            res.status(200).json(data);
        })
        .catch(err => {
            console.error(err);
            res.status(500).json(err);
        })
})


router.put('/update/:id', (req, res) => {

    let data = req.body;

    Model.findByIdAndUpdate(req.params.id, data)
        .then(data => {
            console.log('user data updated');
            res.status(200).json(data);
        })
        .catch(err => {
            console.error(err);
            res.status(500).json(err);
        })
})

router.delete('/delete/:id', (req, res) => {

    Model.findByIdAndDelete(req.params.id)
        .then(data => {
            console.log('user data deleted');
            res.status(200).json(data);
        })
        .catch(err => {
            console.error(err);
            res.status(500).json(err);
        })
})


module.exports = router;