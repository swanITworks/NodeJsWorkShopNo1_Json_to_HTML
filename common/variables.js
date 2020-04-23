const path = require('path');

const basicHtmlTemplate = path.join(__dirname,'templates/','basic_html_template.html');
const olBasicTemplate = path.join(__dirname,'../list/templates/','ol_basic_template.html');
const olTemplate = path.join(__dirname,'list/templates/','ol_template.html');
const ulBasicTemplate = path.join(__dirname,'../list/templates/','ul_basic_template.html');
const ulTemplate = path.join(__dirname,'list/templates/','ul_template.html');
const tabBasicTemplate = path.join(__dirname,'table/templates/','table_basic_template.html');
const tabTemplate = path.join(__dirname,'table/templates/','table_template.html');
const listBasic = path.join(__dirname,'../list/input/','list_basic.json');
const list = path.join(__dirname,'list/input/','list.json');
const tableBasic = path.join(__dirname,'table/input/','table_basic.json');
const table = path.join(__dirname,'table/input/','table.json');
const result = path.join(__dirname,'../output/','result.html');

module.exports = {
    basicHtmlTemplate,
    olBasicTemplate,
    olTemplate,
    ulBasicTemplate,
    ulTemplate,
    tabBasicTemplate,
    tabTemplate,
    listBasic,
    list,
    tableBasic,
    table,
    result,
}