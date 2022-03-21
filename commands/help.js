function help() {
    console.log(`
    These are some myCLI commands used in various situations:

        1) node index.js tree <path>
        2) node index.js organize <path>
        3) node index.js help
    `);
}

module.exports = {
    help:help,
}