const mysql = require("mysql2");

let sslConfig = undefined;

if (process.env.DB_SSL_CA) {
    sslConfig = {
        ca: process.env.DB_SSL_CA
    };
}

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    ssl: sslConfig
});

connection.connect((err) => {
    if (err) {
        console.log("Database connection failed");
        console.log(err);
        return;
    }

    console.log("MySQL Connected Successfully");
});

module.exports = connection;