const fs = require('fs');
const variables = require('./variables');

const getHtmlTemplate = async (fileName = variables.basicHtmlTemplate) => {
    const readFileAsync = (file, code) => {
        return new Promise((resolve, reject) => {
            fs.readFile(file, code, ((err, data) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            }))
        })
    }
    try {
        return await readFileAsync(fileName, 'utf-8')
    } catch (err) {
        console.log(err.message)
    }
};

const fillTemplateWithData = (template, title, body) => {
    const updatedTemplate = template.replace('__title__', title).replace('__body__', body.trim())
    return updatedTemplate;
}

const saveOutputHTML = (dataToSave) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(variables.result, dataToSave, (err => {
            if (err) {
                reject(err)
            } else {
                resolve();
            }
        }))
    })
}

const getInputData = (fileName = variables.listBasic) => {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(JSON.parse(data.toString()))
            }
        })
    })
}

const getListTemplate = (fileName = variables.ulBasicTemplate) => {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data.toString())
            }
        })
    })
};

const fillListTemplateWithDataBasic = (template, objectToFillData) => {
    const objectToInput = [...objectToFillData];
    for (let element of objectToInput) {
        template = template.replace('__data' + element.id.toString() + '__', element.data);
    }
    return template
};

module.exports = {
    getHtmlTemplate,
    fillTemplateWithData,
    saveOutputHTML,
    getInputData,
    getListTemplate,
    fillListTemplateWithDataBasic,
}