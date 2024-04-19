const { FormModel } = require("../models/formModel");


const createForm = async (req, res) => {
    try {
        const newform = new FormModel(req.body);
        const savedForm = await newform.save();
        res.status(201).json({ success: true, message: "Form Created Successfully !", savedForm });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getAllForms = async (req, res) => {
    try {
        const categories = await FormModel.find();
        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getFormById = async (req, res) => {
    const { id } = req.params;
    try {
        const category = await FormModel.findById(id);
        res.status(200).json(category);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateForm = async (req, res) => {
    const { id } = req.params;
    try {
        const updatedForm = await FormModel.findByIdAndUpdate(id, { $set: req.body }, { new: true });
        res.status(201).json({ success: true, message: "Form Created Successfully !", updatedForm });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const deleteForm = async (req, res) => {
    const { id } = req.params;
    try {
        const findCategories = await FormModel.findById(id);
        const deletedCategories = await Promise.all(categories.map(async (question) => {
            return await CategoryModel.findByIdAndUpdate(question.id, { $set: req.body }, { new: true });
        }));
        await FormModel.findByIdAndDelete(id);
        res.json({ message: 'Category deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getAllForms, getFormById, createForm
    , updateForm, deleteForm
}
