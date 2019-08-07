var unirest = require('unirest');
var fs = require('fs');

var data = [];
var i;
for (i = 0; i < 865; i++){
    var request = require('sync-request');
    var res = request('GET', 'http://xxxxx.com' +i);
    var rows = JSON.parse(res.getBody('utf-8')).rows;
    if (rows.length > 0){
        data.push.apply(data, rows);
        console.log(data);
    }
    if (i == 864){
        fs.writeFile ("Logproof.json", JSON.stringify(data), function(err) {
            if (err) throw err;
            console.log('complete');
        });
    }
}


