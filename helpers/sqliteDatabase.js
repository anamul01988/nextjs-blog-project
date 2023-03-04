const sqlite3 = require('sqlite3')
const sqlite = require('sqlite');

export default async function openDb() {
    return sqlite.open({
        filename: "./blog.db", //aikhane data aisha store hobe tacara rote a rakha lagbe sobai jeno pay tai ./ dewa lagce
        driver: sqlite3.Database
    });
};