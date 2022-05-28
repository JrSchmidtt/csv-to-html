const Reader = require('./Reader');
const Processor = require('./Processor');
const leitor = new Reader ();

csvfilepath = './users.csv'         // CSV File

async function main(){
    var rawdata = await leitor.Read(csvfilepath)
    processeddata = Processor.Process(rawdata);
}

main();