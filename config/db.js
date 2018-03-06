const mysql = require("mysql");

let state = {
    pool: null
};

exports.connect = function(done) {
    state.pool = mysql.createPool({
        host: 'mysql3.csse.canterbury.ac.nz',
        user: 'ine16',
        password: '48056985',
        database: 'ine16'
    });
    done();
};

exports.get_pool = function() {
    return state.pool;
};