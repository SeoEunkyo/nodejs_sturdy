const http = require('http');
const paserurl = require('url');


const userInfo = [
    {id : 'freehunterc', pwd:'111', name : 'eunkyo'},
    {id : 'xxxxxxxxxxx', pwd:'222', name : 'xxxxxx'},
    {id : 'yyyyyyyyyyy', pwd:'333', name : 'yyyyyy'},
]

const fuctionDefinition = function (req, res) {
    
    var cli_data = '';
    req.on('data', function (data) {
        cli_data += data;
        console.log('Data event');
    });
    req.on('end', function () {
        console.log(typeof(cli_data))
        const obj_data =  JSON.parse(cli_data);
        
        for (var index = 0; index < userInfo.length; index++) {
            if(userInfo[index].id == obj_data['id'] ){
                res.end(
                    `
                    <!DOCTYPE html>
                    <html>
                      <head>
                        <meta charset="utf-8">
                        <title>My test page</title>
                      </head>
                      <body>
                        <h1>Welcom..  ${userInfo[index].name} </h1>
                      </body>
                    </html> `
                )
            };
        }

        res.end(`
                <!DOCTYPE html>
                    <html>
                      <head>
                        <meta charset="utf-8">
                        <title>My test page</title>
                      </head>
                      <body>
                        <h1>Login Fail </h1>
                      </body>
                    </html> `
        )


    });
}

http.createServer(fuctionDefinition).listen(8080);
// const httpServer = http.createServer(fuctionDefinition)
//httpServer.listen(8080);
console.log('Server starts. Port : 8080')
