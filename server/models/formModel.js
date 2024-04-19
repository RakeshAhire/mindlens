const { Schema, model, } = require("mongoose");

const formSchema = new Schema({
    heading: {
        type: String
    },
    // categories: [{ type: Schema.Types.ObjectId, ref: 'categories' }]
    categories: [
        {
            title: {
                type: String
            },
            questions: [
                {
                    icon: {
                        type: String
                    },
                    title: {
                        type: String
                    },
                    options: [String],
                    selectedAnswer: {
                        type: Number
                    },
                }
            ]
        }
    ]
}, { timestamps: true });

const FormModel = model("forms", formSchema);

module.exports = { FormModel }