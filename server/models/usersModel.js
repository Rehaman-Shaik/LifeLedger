import db from "./databaseConfigs.js";

async function getAllUsers(){
    var users = await db.query("SELECT * FROM users")
    return users.rows
}


export default getAllUsers