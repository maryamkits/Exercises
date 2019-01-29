class Database {
    constructor(dbName){
        if(Database.exists){
            return Database.instance
        }
        this._dbName = dbName;
        Database.instance = this;
        Database.exists = true;
        return this;
    }
    getData(){
        return this._dbName
    }
    setData(value){
        this._dbName = value;
    }
}

const mysql = new Database('MySQL');
console.log(mysql.getData())
console.log(Database.exists)

const mongoDb = new Database('MongoDb');
console.log(mongoDb.getData())