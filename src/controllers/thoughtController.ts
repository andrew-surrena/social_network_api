import { Request, Response } from 'express';
import { User, Thought } from '../models/index.js';

export const getThoughts = async (_req: Request, res: Response) => {
    try {
      const thoughts = await Thought.find();
      res.json(thoughts);
    } catch (error: any) {
      res.status(500).json({
        message: error.message
      });
    }
  }

  export const getSingleThought = async (req: Request, res: Response) => {
    const { thoughtId } = req.params;
    try {
      const thought = await Thought.findById(thoughtId);
      if (thought) {
        res.json(thought);
      } else {
        res.status(404).json({
          message: 'Thought not found'
        });
      }
    } catch (error: any) {
      res.status(500).json({
        message: error.message
      });
    }
  };

  export const createThought = async (req: Request, res: Response) => {
    try {
      console.log(req.body);
      const { thoughtext, username, reactions } = req.body;
      const newThought = await Thought.create({
        thoughtext,
        username,
        reactions,
      });
      await User.findOneAndUpdate(
        { username: req.body.username },
        { $addToSet: { thoughts: newThought._id } },
        { runValidators: true }
      )
      res.status(201).json(newThought);
    } catch (error: any) {
      console.log(error);
  
      res.status(400).json({
        message: error.message
      });
    }
  };

  export const updateThought = async (req: Request, res: Response) => {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $set: req.body },
        { runValidators: true, new: true }
      );
  
      if (!thought) {
        res.status(404).json({ message: 'No thought with this id!' });
      }
  
      res.json(thought)
    } catch (error: any) {
      res.status(400).json({
        message: error.message
      });
    }
  };

  export const deleteThought = async (req: Request, res: Response) => {
    try {
      const thought = await Thought.findOneAndDelete({ _id: req.params.thoughtId });
  
      if (!thought) {
        res.status(404).json({
          message: 'No thought with that ID'
        });
      }
        res.json({ message: 'Thought deleted!' });
      } catch (error: any) {
      res.status(500).json({
        message: error.message
      });
    }
  };

  export const addReaction = async (req: Request, res: Response) => {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $addToSet: { reactions: req.body } },
        { runValidators: true, new: true }
      );
  
      if (!thought) {
        res.status(404).json({ message: 'No thought with this id!' });
      }
  
      return res.json(thought)
    } catch (err) {
        return res.status(500).json(err);
    }
  };

  export const deleteReaction = async (req: Request, res: Response) => {
    try {
        const thought = await Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $pull: { reactions: { reactionId: req.params.reactionId } } },
            { runValidators: true, new: true }
        );

        if (!thought) {
            return res
                .status(404)
                .json({ message: 'No thought found with that ID :(' });
        }

        return res.json(thought);
    } catch (err) {
        return res.status(500).json(err);
    }
}
