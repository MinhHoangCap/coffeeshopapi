const { MongoClient, ServerApiVersion } = require('mongodb');
const apiKey = "0lhnGI4KsghFNtwOjYUZB9OsLmsal0sLZYU00lV5WfdKV2GmNLzW9vb6w67xlbqY";
// const express =require('express')
// const app = express();
require('dotenv').config();

// const uri = "mongodb+srv://demo:demo123456@cluster0.f7i3kir.mongodb.net/?retryWrites=true&w=majority";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const uri =process.env.ATLAS_URI || "";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

    let conn;
  try {
    // Connect the client to the server	(optional starting in v4.7)
    conn = await client.connect();
    // Send a ping to confirm a successful connection
    
  }
  catch(e){
    console.error(e);
  }
  let db = conn.db("Coffee_shop");
export default db;
