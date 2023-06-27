require('dotenv').config();
const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const url = process.env.ATLAS_URI;
const dbName = "coffee_shop";

router.get('/', async (req,res) => {
    const client = new MongoClient(url);
    try {
        await client.connect();
        res.send("connected to database");
    } catch(e){
        console.error(e);
        res.status(500).send("Error connecting to database");
    } finally {
        await client.close();
    }
});

router.get('/customer', async (req, res) => {
    const client = new MongoClient(url);
    try {
        await client.connect();
        const db = client.db(dbName);
        const coll = db.collection("customers");
        const customers = await coll.find().toArray();
        // await cursor.forEach(console.log);
        res.json(customers);
    } catch(e){
        console.error(e);
        res.status(500).send("Error connecting to database");
    } finally {
        await client.close();
    }
});
router.get('/product', async (req, res) => {
    const client = new MongoClient(url);
    try {
        await client.connect();
        const db = client.db(dbName);
        const coll = db.collection("products");
        const products = await coll.find().toArray();
        // await cursor.forEach(console.log);
        res.json(products);
    } catch(e){
        console.error(e);
        res.status(500).send("Error connecting to database");
    } finally {
        await client.close();
    }
});
router.get('/product/add', async (req, res,data) => {
    const client = new MongoClient(url);
    try {
        await client.connect();
        const db = client.db(dbName);
        const coll = db.collection("products");
        const products = await coll.insert(data);
        // await cursor.forEach(console.log);
        res.json(products);
    } catch(e){
        console.error(e);
        res.status(500).send("Error connecting to database");
    } finally {
        await client.close();
    }
});
router.get('/product/coffee', async (req, res) => {
    const client = new MongoClient(url);
    try {
        await client.connect();
        const db = client.db(dbName);
        const coll = db.collection("products");
        const products = await coll.find({product_type:1}).toArray();
        // await cursor.forEach(console.log);
        res.json(products);
    } catch(e){
        console.error(e);
        res.status(500).send("Error connecting to database");
    } finally {
        await client.close();
    }
});
router.get('/product/tea', async (req, res) => {
    const client = new MongoClient(url);
    try {
        await client.connect();
        const db = client.db(dbName);
        const coll = db.collection("products");
        const products = await coll.find({product_type:2}).toArray();
        // await cursor.forEach(console.log);
        res.json(products);
    } catch(e){
        console.error(e);
        res.status(500).send("Error connecting to database");
    } finally {
        await client.close();
    }
});
router.get('/product/type', async (req, res) => {
    const client = new MongoClient(url);
    try {
        await client.connect();
        const db = client.db(dbName);
        const coll = db.collection("products_type");
        const products = await coll.find().toArray();
        // await cursor.forEach(console.log);
        res.json(products);
    } catch(e){
        console.error(e);
        res.status(500).send("Error connecting to database");
    } finally {
        await client.close();
    }
});
module.exports = router;