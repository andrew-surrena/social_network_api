import { Schema, model } from 'mongoose';
import { reactionSchema } from './Reaction.js';
import type { IReaction } from './Reaction.js';


interface IThought {
    thoughtext: string;

    createdAt: Date;
    username: string;
    reactions: IReaction[];
}

const thoughtSchema = new Schema<IThought>(
    {
        thoughtext: {
            type: String,
            required: true,
            maxLength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
        username: [
            {
                type: String,
                required: true,
            },
        ],
        reactions: [reactionSchema],
    },
    {   toJSON: {
        virtuals: true,
        getters: true,
    },
        timestamps: true,
        id: false,
    }
);

thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions?.length;
  });

  thoughtSchema.virtual('formattedCreatedAt').get(function () {
    return this.createdAt.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    }); // Format the date as a strinxg
});

const Thought = model('Thought', thoughtSchema);

export default Thought