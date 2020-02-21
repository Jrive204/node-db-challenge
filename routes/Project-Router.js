const express = require('express');

const router = express.Router();

const ProjectData = require('../data/helpers/projectModel');

router.get('/', (req, res) => {
  ProjectData.get()
    .then(projects => res.status(200).json(projects))
    .catch(err => res.status(500).json({ error: 'Something went wrong' }));
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  ProjectData.get(id)
    .then(projects => res.status(200).json(projects))
    .catch(err => res.status(500).json({ error: 'Something went wrong' }));
});

router.post('/', (req, res) => {
  ProjectData.insert(req.body)
    .then(project => res.status(200).json(project))
    .catch(err => res.status(500).json(err.message));
});

module.exports = router;
