var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var form = new Schema({
    formId: Number,
    formName: String,
    numOfSubmissions: Number,
    fields: [
        {
            fieldLabel: String,
            inputName: String,
            inputType: String
        }
    ],
    submissions: [
        [
            {
                fieldLabel: String,
                inputName: String,
                inputType: String,
                input: String
            }
        ]
    ]
});

module.exports = mongoose.model('Form', form);
