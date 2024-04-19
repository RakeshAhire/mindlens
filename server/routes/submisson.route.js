const express = require('express');
const { getAllSubmissions, getSubmissionById, createSubmission, deleteSubmission } = require('../controllers/submission');
const submissionRouter = express.Router();

submissionRouter.get('/getall', getAllSubmissions);
submissionRouter.get('/getsingle/:id', getSubmissionById);
submissionRouter.post('/formsubmit', createSubmission);
submissionRouter.delete('/delete/:id', deleteSubmission);

module.exports = { submissionRouter };
