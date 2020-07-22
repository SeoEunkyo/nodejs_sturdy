const http = require('http');
const paserurl = require('url');


const fuctionDefinition = function (req, res) {
    const { headers, method, url } = req;
    const pathname = paserurl.parse(url, true).pathname;    
    
    var cli_data = '';
    req.on('data', function (data) {
        cli_data += data; // 데이터가 짤려서 들어 올수 있습니다.
        console.log('Data event');
    });
    req.on('end', function () {
        console.log('End event');
        console.log('cli_data', cli_data)  
    });
}

http.createServer(fuctionDefinition).listen(8080);
// const httpServer = http.createServer(fuctionDefinition)
//httpServer.listen(8080);
console.log('Server starts. Port : 8080')
