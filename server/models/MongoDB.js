import { MongoClient } from 'mongodb';

class MongoDatabase {
    static uri = ""

    constructor(databaseName, collectionName) {
        this.databaseName = databaseName;
        this.collectionName = collectionName;
    }

    async connectMongo() {
        try {
            this.client = new MongoClient(MongoDatabase.uri, { useNewUrlParser: true, useUnifiedTopology: true });
            await this.client.connect();
            console.log(`Pinged your database ${this.databaseName} and collection ${this.collectionName}. You successfully connected to MongoDB!`);
            const database = this.client.db(this.databaseName);
            this.collection = database.collection(this.collectionName);
            return this.collection;
        } catch (error) {
            console.log(error);
        }
    }

    async retrieveAll() {
        if (!this.collection) {
            await this.connectMongo();
        }
        const findResult = await this.collection.find().toArray();
        return findResult;
    }
}

export {MongoDatabase};
