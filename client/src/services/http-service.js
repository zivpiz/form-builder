import 'whatwg-fetch';

class HttpService {
    getForms = () => {
        return new Promise(((resolve, reject) => {
            fetch('http://localhost:3004/home')
                .then((response) => {
                    resolve(response.json());
                }).catch((err) => {
                reject(err);
            });
        }));
    };

    loadForm = (formId) => {
        var requestURL = 'http://localhost:3004/home/' + formId;
        return new Promise(((resolve, reject) => {
            fetch(requestURL)
                .then((response) => {
                    resolve(response.json());
                }).catch((err) => {
                reject(err);
            });
        }));
    };

    addNewForm(newForm) {
        fetch('http://localhost:3004/home/addForm', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                formName: newForm.formName,
                fields: newForm.entries,
            })
        });
    }

    addSubmission(formId, newSubmission, recaptchaToken) {
        var requestURL = 'http://localhost:3004/home/' + formId + '/submit';
        var body = JSON.stringify({submission: newSubmission, recaptchaToken:recaptchaToken})
        fetch(requestURL, {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: body
        });
    }

}

export default HttpService;