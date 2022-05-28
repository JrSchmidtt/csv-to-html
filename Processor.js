class Processor {
    static Process(data) {
        var splitRow = data.split("\r\n");
        var rows = [];
        splitRow.forEach(row => {
            var arr = row.split(",");
            rows.push(arr);
        });
        return rows;
    }
}

module.exports = Processor;