var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./database/appDb.sb');
module.exports = db;

function readTable (table, cb) {
let sql = `SELECT * FROM ${table}`;
let data = {};
    db.all(sql, function(err, rows) {        /* Return all results of query */
        if (err) throw(err);            /* If there's an error, terminate app */
        rows.forEach(function(row) {       /* For each row matching the query */
        data[row.id] = {};                  /* init row id as top-level key */
        Object.keys(row).forEach(function(k) {    /* For each column of row */
            data[row.id][k] = unescape(row[k]);     /* add the key-value pair */
        });
        });
        cb(data);    /* data = { id: { "colname" : value }, ... }, id2: ... } */
    });
};

module.exports = {   
    readTable
}