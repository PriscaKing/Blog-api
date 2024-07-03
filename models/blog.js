import { model, Schema, Types } from "mongoose";

//import mongoose-to-json
import { toJSON } from "@reis/mongoose-to-json"




const blogSchema = new Schema({
    //Unique require is termed validation
    name: { type: String, unique: true, required: true },
    description: { type: String, required: true },
    image: { type: String },
}, {
    timestamps: true
});

blogSchema.plugin(toJSON);
export const BlogModel = model('blog', blogSchema);
