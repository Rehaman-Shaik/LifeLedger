import pg from 'pg';

const db = new pg.Client({
  user:"postgres",
  password:"12345",
  host:"localhost",
  database:"lifeledger",
  port:5432
})
db.connect()

export default db