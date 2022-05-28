const Reader = require('./Reader');
const Processor = require('./Processor');
const Table = require('./Table')
const leitor = new Reader ();

csvfilepath = './users.csv'         // CSV File

async function main(){
    var rawdata = await leitor.Read(csvfilepath)
    processeddata = Processor.Process(rawdata);
    
    var users = new Table(processeddata);

    console.log(users.RowCount);
    console.log(users.ColumnCount);
}

main();