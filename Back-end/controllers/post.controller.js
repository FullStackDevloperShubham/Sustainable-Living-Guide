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

// count the total data in mongodb
export const totalNumberOfDocumentsInDatabase = async(req,res)=>{
    try {
        // get the total data 
        const count = await Post.countDocuments()
        res.status(200).json(count)
    } catch (error) {
         return res.status(404).json({error:"Error while count the data"})
    }
}

// Delete post by id 
export const deletePostById = async(req,res)=>{

    // take is from front end 
    // req.params.id
    const { id } = req.params;

    // check if the id is valid
    if (!id) {
        return res.status(400).json({ error: 'Please provide the id' })
    }

    try {
        // delete the post by id
        await Post.findByIdAndDelete(id)
        res.status(200).json({ message: 'Post deleted successfully' })
    } catch (error) {
        return res.status(404).json({ error: "id dosen't exist" })
    }

}

// update the post
export const updatePostById = async (req, res) => {

    // get the id from the params
    const {id} = req.params;
    // get the data from body
    const { title, description } = req.body

    // check if the id is valid
    if (!id ||!description) {
        return res.status(400).json({ error: 'Please provide the id and description' })
    }

    try {
        // update the post by id
        await Post.findByIdAndUpdate(id, { description  , title}, { new: true })
        res.status(200).json({ message: 'Post updated successfully' })
    } catch (error) {
        return res.status(404).json({ error: "id dosen't exist" })
    }
}