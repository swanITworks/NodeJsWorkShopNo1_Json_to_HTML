const utils = require('./common/utils');
const {program} = require('commander');
const basicListPath = require('./paths/paths');

program.version('1.0.0').description('Our first program');

program
    .command('list')
    .option('-ur, --unorderedList', 'use template with unordered list')
    .option('-or, --orderedList', 'use template with ordered list')
    .option('-t, --title-type <type>', 'title of html file')
    .alias('l')
    .description('create html file with list')
    .action(cmdObj => {
        if (cmdObj.orderedList === true) {
            basicListPath('ordered', cmdObj.titleType)
        } else {
            basicListPath(null, cmdObj.titleType)
        }
    }).parse(process.argv);


// (async ()=>{
//     const template = await utils.getHtmlTemplate()
//     const updatedTemplate = await utils.fillTemplateWithData(template,'My first generated HTML',"It's quite fun!");
//     utils.saveOutputHTML(updatedTemplate).then(()=>console.log('file saved')).catch(err=>console.log(err.message));
//     const dataToInput = await utils.getInputData().then(data=>data).catch(err=>console.log(err.message));
//     const listHtmlTemplate = await utils.getListTemplate().then(data=>data).catch(err=>console.log(err.message));
//     const htmlWithBasicList = utils.fillListTemplateWithDataBasic(listHtmlTemplate,dataToInput);
// })();











