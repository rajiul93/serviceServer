const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const cors = require("cors");
require("dotenv").config();

const corsOption = {
  origin: ["http://localhost:5173"],
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOption));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});


const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.wxrpk.gcp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });

  async function run() {
    try {
      // Connect the client to the server	(optional starting in v4.7)
    //   await client.connect();
      const categoryCollection = client.db("PROJECT0").collection("users");
      const districtsCollection = client.db("PROJECT0").collection("cities");
  
      
     
      app.get("/cities", async (req, res) => {
        const district = await districtsCollection.find().toArray(); 
        res.send(district);
      });
  
  
  
    //   await client.db("admin").command({ ping: 1 });
    //   console.log(
    //     "Pinged your deployment. You successfully connected to MongoDB!"
    //   );
    } finally {
      // Ensures that the client will close when you finish/error
    }
  }
  run().catch(console.dir);













app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
