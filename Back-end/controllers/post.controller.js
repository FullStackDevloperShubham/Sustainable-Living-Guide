// import Post schema
import {Post} from '../model/Post.model.js';

// get all post 
// get router
export const handleGet = (req,res)=>{
    res.send('data get ')
}

// store post
// req.body
export const handlePostData = (req, res) => {
    // get the data from body
    const {title , description} = req.body;

    // check if the data is empty
    if(!title || !description){
        return res.status(400).json({error: 'Please fill all the data'})
    }

    // post object to store into the mongodb
    const createPost = new Post({
        title,
        description
    })
    // save into the mongodb
    createPost.save()

    // store the data in the database
    res.status(200).json({message: 'Post created successfully'})
}
