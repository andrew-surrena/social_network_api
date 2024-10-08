import { Request, Response } from 'express';
import { ObjectId } from 'mongodb';
import { User, Thought } from '../models/index.js';

export const getUsers = async (_req: Request, res: Response) => {
    try {
      const users = await User.find();
      res.json(users);
    } catch (error: any) {
      res.status(500).json({
        message: error.message
      });
    }
  }

  export const getSingleUser = async (req: Request, res: Response) => {
    const { userId } = req.params;
    try {
      const user = await User.findById(userId);
      if (user) {
        res.json(user);
      } else {
        res.status(404).json({
          message: 'User not found'
        });
      }
    } catch (error: any) {
      res.status(500).json({
        message: error.message
      });
    }
  };

  export const createUser = async (req: Request, res: Response) => {
    try {
      console.log(req.body);
      const { username, email, thoughts, friends } = req.body;
      const newUser = await User.create({
        username,
        email,
        thoughts,
        friends
      });
      res.status(201).json(newUser);
    } catch (error: any) {
      console.log(error);
  
      res.status(400).json({
        message: error.message
      });
    }
  };

  export const updateUser = async (req: Request, res: Response) => {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.courseId },
        { $set: req.body },
        { runValidators: true, new: true }
      );
  
      if (!user) {
        res.status(404).json({ message: 'No user with this id!' });
      }
  
      res.json(user)
    } catch (error: any) {
      res.status(400).json({
        message: error.message
      });
    }
  };

  export const deleteUser = async (req: Request, res: Response) => {
    try {
      const user = await User.findOneAndDelete({ _id: req.params.userId });
  
      if (!user) {
        res.status(404).json({
          message: 'No user with that ID'
        });
      } else {
        await Thought.deleteMany({ _id: { $in: user.thoughts } });
        res.json({ message: 'User and thoughts deleted!' });
      }
  
    } catch (error: any) {
      res.status(500).json({
        message: error.message
      });
    }
  };

  export const addFriend = async (req: Request, res: Response) => {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $addToSet: { friends: req.params.friendId } },
        { runValidators: true, new: true }
      );
  
      if (!user) {
        res.status(404).json({ message: 'No user with this id!' });
      }
  
      return res.json(user)
    } catch (err) {
        return res.status(500).json(err);
    }
  };

  export const deleteFriend = async (req: Request, res: Response) => {
    try {
        const user = await User.findOneAndUpdate(
            { _id: req.params.userId },
            { $pull: { freinds: { _id: req.params.friendId } } },
            { runValidators: true, new: true }
        );

        if (!user) {
            return res
                .status(404)
                .json({ message: 'No user found with that ID :(' });
        }

        return res.json(user);
    } catch (err) {
        return res.status(500).json(err);
    }
}
