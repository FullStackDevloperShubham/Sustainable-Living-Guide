// import Post schema
import { Post } from '../model/Post.model.js';

// get all post 
// get router
export const handleGet = async (req, res) => {
    // get all the post from the database
    const getAllPosts = await Post.find()
    res.status(200).json( getAllPosts )
}

// get post by id
export const getDataById = async (req, res) => {
     try{
        // get the id from the params
    const { id } = req.params;

    // check if the id is valid
    if (!id) {
        return res.status(400).json({ error: 'Please provide the id' })
    }

    // get the post by id
    const getPostById = await Post.findById({_id : id})


    res.status(200).json({ getPostById })
     }catch(error){
         res.status(400).json({error : "id dosen't exist"})
     }

}


// store post
// req.body
export const handlePostData = (req, res) => {
    // get the data from body
    const { title, description } = req.body;

    // check if the data is empty
    if (!title || !description) {
        return res.status(400).json({ error: 'Please fill all the data' })
    }

    // post object to store into the mongodb
    const createPost = new Post({
        title,
        description
    })
    // save into the mongodb
    createPost.save()

    // store the data in the database
    res.status(200).json({ message: 'Post created successfully' })
}
