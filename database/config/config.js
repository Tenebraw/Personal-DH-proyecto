module.exports = {
    "development": {
        "username": "root",
        "password": null,
        "database": "ocult_store_db",
        "host": "127.0.0.1",
        "dialect": "mysql",
        "define": {
            "timestamps": false,
            "underscored": true
        }
    },
    "test": {
        "username": "root",
        "password": null,
        "database": "database_test",
        "host": "127.0.0.1",
        "dialect": "mysql"
    },
    "production": {
        "username": "root",
        "password": null,
        "database": "database_production",
        "host": "127.0.0.1",
        "dialect": "mysql"
    }
}