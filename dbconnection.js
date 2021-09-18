
var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "gopal9603",
    database: "newtrial"
});


con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.query("SELECT * FROM new_table", function (err, result) {
        if (err) throw err;
        console.log(result);
    });
});