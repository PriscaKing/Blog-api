import {BlogModel} from  "../models/blog.js";


//Get all blogs
export const getBlogs = async (req, res,next)=>{
    try {
        //Get all blogs from database
        const allBlogs = await BlogModel.find()
        //Return all blogs as response
        res.status(200).json(allBlogs);
    } catch (error) {
        next(error);
        
    }
};


//Post all blogs
export const postBlogs = async (req, res, next)=>{
    try {
        //Add blog to database
        const newBlog = await BlogModel.create(req.body);
        //Return response
        res.status(200).json(newBlog);
    } catch (error) {
        next(error);
    }
};


//Patch blogs
export const patchBlogs = async(req, res, next)=> {
    try {
        //update blog by id
        const updateBlog = await BlogModel.findByIdAndUpdate(req.params.id,req.body,{new:true})

        //Return response
        res.status(200).json(updateBlog)

    } catch (error) {
        res.status(400).json(error, error.message)
        next(error)
        
    }
}


//Delete blogs
export const deleteBlogs = async(req, res, next)=>{
    try {
        //Delte blog by ID
        const deleteBlogs = await BlogModel.findByIdAndDelete(req.params.id);
        //Return response
        res.status(200).json(deleteBlogs);
    } catch (error) {
        next(error);
    }
}