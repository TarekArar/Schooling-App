const router = require('express').Router();
let Exercise = require('../models/etudiant.model');

router.route('/').get((req, res) => {
    Exercise.find()
        .then((exercises) => res.json(exercises))
        .catch(err => res.status(400).json("Error :", err))
})

router.route('/add').post((req, res) => {
    const nom = req.body.nom;
    const prenom = req.body.prenom;
    const matricule = Number(req.body.matricule);
    const dateNissance = Date.parse(req.body.dateNissance);

    const newExercise = new Exercise({
        nom,
        prenom,
        matricule,
        dateNissance
    });

    newExercise.save()
        .then(() => res.json("Exercise Added"))
        .catch((err) => res.status(400).json("Error ", err))
})

router.route('/:id').get( (req, res) => {
    Exercise.findById(req.params.id)
    .then(exercise => res.json(exercise))
    .catch(err => res.json("Error", err))
})

router.route('/:id').delete( (req, res) => {
    Exercise.findByIdAndDelete(req.params.id)
    .then(() => res.json("Exercise Deleted"))
    .catch((err) => res.json("Error", err))
})

router.route('/update/:id').post((req, res) => {
    Exercise.findById(req.params.id)
    .then(exercise => {
        exercise.nom = req.body.nom;
        exercise.prenom = req.body.prenom;
        exercise.matricule = Number(req.body.matricule);
        exercise.dateNissance = Date.parse(req.body.dateNissance); 

        exercise.save().
        then(() => res.json("Exercise Updated"))
        .catch((err) => res.json('Error' + err))
    })
    .catch((err) => res.json('Error' + err))
})

module.exports = router;
