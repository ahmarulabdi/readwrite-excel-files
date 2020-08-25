const Excel = require('exceljs')
const path = require('path')

// change this directory path based on your OS
const dir = require('os').homedir() +'/Downloads'

// initiate new workbook
const workbook = new Excel.Workbook();

// starting read and write file async
workbook.xlsx.readFile(path.join(dir, 'template.xlsx')).then(data => {
    return data.xlsx.writeFile(path.join(dir, 'result.xlsx'))
})