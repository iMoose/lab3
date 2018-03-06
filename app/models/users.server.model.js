const db = require('../../config/db');

exports.getAll = function(done) {
    db.get_pool().query('SELECT * FROM lab2_users', function(err, rows) {
        if (err) return done(({"ERROR": "Error selecting"}));

        return done(rows);
    });
};

exports.getOne = function(userId, done) {
    db.get_pool().query('SELECT * FROM lab2_users WHERE user_id = ?', userId, function(err, rows) {
        if (err) return done(err);
        done(rows);
    });
};

exports.insert = function(username, done) {
    let values = [username];

    db.get_pool().query('INSERT INTO lab2_users (username) VALUES ?', values, function (err, result) {
        if (err) return done(err);

        done(result);
    });
};

exports.alter = function(userId, username, done) {
    let values = [username, userId];

    db.get_pool().query('UPDATE lab2_users SET username = ? WHERE user_id = ?', values, function(err, result) {
        if (err) return done(err);

        done(result);
    })
};

exports.remove = function(userId, done) {
    let values = [userId];

    db.get_pool().query('DELETE FROM lab2_users WHERE user_id = ?', values, function(err, result) {
       if (err) return done(err);

        done(result);
    });
};