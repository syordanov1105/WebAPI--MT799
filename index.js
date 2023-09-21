import 'dotenv/config'
import express from "express"
import multer from 'multer'
import sqlite3 from "sqlite3"

const app = express();
const db = new sqlite3.Database("./mt799.db");

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.post("/upload", upload.single("mt799"), (req, res)=>{

    //Sended file (message) to String
    const message = req.file.buffer.toString("utf8");

    db.run("INSERT INTO messages_mt799 (message_content) VALUES (?)", [message], (err)=>{

        if(err){
            console.error("Saving to database failed!", err);
            res.status(400).send("Saving to database failed!");
        }

        console.log("Successfully saved to database!");
        res.status(200).send("Successfully saved to database!");

    });
});


app.listen(process.env.PORT, ()=>{
    console.log(`Server is running at port ${process.env.PORT}`)
})