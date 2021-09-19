const http = require('http');
const mysql = require('mysql');

const port = 5000;
const table = [];

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'gopal9603',
    database: 'newtrial'
});
//hiii
con.connect((err) => {
    if (err) throw err;
    console.log('Connected!');
    con.query("SELECT * FROM new_table", (err,rows)=> {
        if (err) throw err;
        rows.forEach( (row)=>{
            printRow= (`student_id: ${row.student_id}, Sname=${row.Sname}`)
            table.push(printRow)
        })
    });
});
// new change

const server = http.createServer(function(req, res) {
    res.write("Hello World! \n");
    table.forEach( (row) => {
        res.write("\n" + row);
    })
    res.end()
})

server.listen(port, function(error) {
    if (error) {
        console.log('Error', error)
    } else {
        console.log('Its on port: ' + port)
    }
})
