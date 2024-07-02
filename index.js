import express from 'express';
import mongoose from 'mongoose';
import blogRouter from './routes/blogroute.js'
import { dbconnection } from './config/db.js';
import 'dotenv/config'




//Connect to database
// await mongoose.connect(process.env.MONGO-URL)

const blog = express();

//Apply middlewares
blog.use(express.json());


//use routes
blog.use(blogRouter);
dbconnection()


//Listen for incoming requests 

blog.listen(6000, () => {
    console.log('Blog listening on port');
});