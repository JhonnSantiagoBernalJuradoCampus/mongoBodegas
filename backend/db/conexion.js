import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

export async function connectionDB(){
    try {
        const uri = `mongodb+srv://${process.env.ATLAS_USER}:${process.env.ATLAS_PASSWORD}@ejemplocluster.p78ttxa.mongodb.net/${process.env.ATLAS_DB}`;
        const opt = {
            useNewUrlParser: true,
            useUnifiedTopology: true
        };

        const client = await MongoClient.connect(uri,opt);
        return client.db();
    } catch (error) {
        return {status: 500, message: error};
    }
}