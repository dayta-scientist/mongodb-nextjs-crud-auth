import {connect, connection} from "mongoose";
require('dotenv').config()

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.ezhluoi.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

const conn = {
  isConnected: false
}

export async function connectDB()   {
  if (conn.isConnected) return

  const db = await connect(uri)
  console.log(db.connection.db.databaseName)
  conn.isConnected = db.connections[0].readyState
}

connection.on('conected', () => {
  console.log('Mongoose is conected')
})

connection.on('conected', (err) => {
  console.log('Mongoose connection error', err)
})