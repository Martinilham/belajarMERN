import User from "../models/usermodel.js";

export const getUser = async (req,res) => {
    try{
        const users = await User.find()
        res.json(users);
    }catch(error){
        res.status(404).json({message:error.message})
    }
}  

export const getUserById = async (req,res) => {
    try{
        const userById = await User.findById({_id:req.params.id})
        res.json(userById);
    }catch(error){
        res.status(404).json({message:error.message})
    }
}  

export const saveUser = async (req,res) => {
    const user = new User()
    try{
        const insertUser = await user.save()
        res.status(201).json(insertUser)
    }catch(error){
        res.status(400).json({message:error.message})
    }
}  

export const update = async (req,res) => {
    try{
        const updateUser = await User.updateOne({_id:req.params.id},
            res.status(200).json(updateUser))
        res.json(user);
    }catch(error){
        res.status(400).json({message:error.message})
    }
}  

export const deleteUser = async (req,res) => {
    try{
        const deleteUser = await User.deleteOne({_id:req.params.id},
            res.status(200).json(deleteUser))
    }catch(error){
        res.status(400).json({message:error.message})
    }
}  

