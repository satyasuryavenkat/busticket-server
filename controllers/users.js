import userList from '../models/User.js';
import mongoose from 'mongoose';
export const getUsers = async (req,res) =>{

    try {

        const users = await userList.find();

        res.status(200).json(users);
        
    } catch (error) {

        res.status(404).json({message: error.message});
        
    }

}

export const createUser = async (req,res) =>{

    const user = req.body;

    const newUser = new userList(user);

    try {

        await newUser.save();

        res.status(201).json(newUser);
        
    } catch (error) {

        res.status(404).json({message: error.message});
        
    }

}

export const authenticateUser = async (req, res) => {

    const user = await userList.findOne({ email: req.body.email, password: req.body.password });
      
  
      if (user) {
        res.status(200).send({
          status: 'success'
        });
      } else {
        res.status(404).send({
          status: 'failed',
          message: {
            error: 'Email or Password did not match',
          },
        });
      }

}

