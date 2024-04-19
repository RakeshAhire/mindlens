const express = require('express');
const { getAllForms, getFormById, createForm, updateForm, deleteForm } = require('../controllers/form');
const formRouter = express.Router();

formRouter.post('/create', createForm);
formRouter.get('/getall', getAllForms);
formRouter.get('/getsingle/:id', getFormById);
formRouter.put('/update/:id', updateForm);
formRouter.delete('/delete/:id', deleteForm);

module.exports = { formRouter };
