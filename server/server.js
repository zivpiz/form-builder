var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/db', {useNewUrlParser: true});
var Form = require('./model/form');
const cors = require('cors');
const port = 3004;

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));

var lastUsedID;
Form.find({}, (err, forms) => {
    if (err) {
    }
    else {
        lastUsedID = (forms.length > 0) ? forms[forms.length - 1].formId : 0;
    }
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res) => {
    res.send('Welcome to the API');
});

//Add a new form to the db
app.post('/home/addForm', (req, res) => {
    var form = new Form();
    form.formId = ++lastUsedID;
    form.formName = req.body.formName;
    form.numOfSubmissions = 0;
    form.fields = req.body.fields;
    form.sumbissions = [];
    form.save((err, savedForm) => {
        if (err) {
            res.status(500).send({error: 'Form creating failed.'});
        }
        else {
            res.status(200).send(savedForm);
        }
    })
});

//Allow all requests from all domains & localhost
app.all('/*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "POST, GET");
    next();
});
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//Get list of all forms
app.get('/home', (req, res) => {
    Form.find({}, (err, forms) => {
        if (err) {
            res.status(500).send({error: 'Could not fetch forms.'});
        }
        else {
            res.status(200).send(forms);
        }
    })
});

//Add a submission to a form.
app.post('/home/:formID/submit', (req, res) => {
    var formID = req.params.formID;
    Form.findOne({formId: formID}, (err, formFound) => {
        if (err) {
            res.status(500).send({error: 'Could not find specific form.'});
        }
        else {
            formFound.submissions.push(req.body);
            formFound.numOfSubmissions = formFound.numOfSubmissions + 1;
            formFound.save((err, savedForm) => {
                if (err) {
                    res.status(500).send({error: "Form Update failed."});
                }
                else {
                    res.status(200).send(savedForm);
                }
            })
        }
    });
});

//Get a single form by ID
app.get('/home/:formID', (req, res) => {
    var formID = req.params.formID;
    Form.findOne({formId: formID}, (err, formFound) => {
        if (err) {
            res.status(500).send({error: 'Could not find specific form submissions.'});
        }
        else {
            res.status(200).send(formFound);
        }
    });
});


app.listen(port, () => {
    console.log("API Running on port " + port);
});

