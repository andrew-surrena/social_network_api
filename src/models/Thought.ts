import { Schema, model, Document, ObjectId, Types } from 'mongoose';

interface IReaction extends Document {
    reactionId: ObjectId;
    reactionBody: string;
    username: string;
    createdAt: Date;
    }
interface IThought {
    thoughtext: string;

    createdAt: Date;
    username: string;
    reactions: IReaction[];
}

const reactionSchema = new Schema<IReaction>(
    {
    reactionId: {type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
    },
    reactionBody: { type: String,
        required: true,
        maxlength: 280,
     },
    username: { type: String, 
        required: true,
    },
    createdAt: {type: Date,
default: Date.now,
    },
},
    {
        toJSON: {
          getters: true,
        },
        id: false,
      }
);

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