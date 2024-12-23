const db = require("../config/database");

class Product {
    static async getAll(){
        const [rows] = await db.query('SELECT * FROM products');
        return rows;
    }
}


module.exports = Product;