const Reader = require('./Reader');
const Processor = require('./Processor');
const Table = require('./Table')
const HtmlParser = require('./HtmlParser')
const Writer = require('./Writer');

const reader = new Reader();
const writer = new Writer();
const timeElapsed = Date.now();
const today = new Date(timeElapsed);

csvfile = './users.csv'       // CSV File
htmlfile = 'html.html'        // SAVE html File

async function main() {
    var rawdata = await reader.Read(csvfile)
    processeddata = Processor.Process(rawdata);
    var users = new Table(processeddata);
    var html = await HtmlParser.Parse(users);
    writer.Write(today.toDateString()+'.html', html);
}

main();