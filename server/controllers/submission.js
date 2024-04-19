const { FormModel } = require("../models/formModel");
const { SubmissionModel } = require("../models/submissionsModel");

const getAllSubmissions = async (req, res) => {
    try {
        const categories = await SubmissionModel.find();
        res.json(categories);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getSubmissionById = async (req, res) => {
    try {
        const category = await SubmissionModel.findById(req.params.id);
        res.json(category);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createSubmission = async (req, res) => {
    try {
        console.log('req.body: ', req.body);
        const form = new SubmissionModel(req.body);
        const savedForm = await form.save();
        res.status(201).json({ success: true, message: "Form Submitted Successfully !", savedForm });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const updateSubmission = async (req, res) => {
    try {
        const updatedCategory = await SubmissionModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedCategory);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const deleteSubmission = async (req, res) => {
    try {
        await SubmissionModel.findByIdAndDelete(req.params.id);
        res.json({ message: 'Category deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getAllSubmissions, getSubmissionById, createSubmission
    , updateSubmission, deleteSubmission
}
