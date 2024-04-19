const { Schema, model, } = require("mongoose");

const submissionSchema = new Schema({
    username: {
        type: String
    },
    heading: {
        type: String
    },
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

const SubmissionModel = model("submissions", submissionSchema);

module.exports = { SubmissionModel }