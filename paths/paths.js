const utils = require('../common/utils');
const variables = require('../common/variables');

const basicListPath = async (typeOfList,title) => {
        const inputData = await utils.getInputData(variables.listBasic);
        //tutaj wybor listy
        let listTemplate;
        if (typeOfList === 'ordered'){
                listTemplate = await utils.getListTemplate(variables.olBasicTemplate);
        } else {
                listTemplate = await utils.getListTemplate();
        }
        const updatedListHtml = await utils.fillListTemplateWithDataBasic(listTemplate, inputData);
        const basicHtmlTemplate = await utils.getHtmlTemplate().then(data => data);
        const fulfilledResult = utils.fillTemplateWithData(basicHtmlTemplate, title, updatedListHtml);
        utils.saveOutputHTML(fulfilledResult).then(() => console.log('file saved')).catch(err => console.log(err))
};

module.exports = basicListPath;