import { Schema, Document, model, ObjectId } from 'mongoose';

interface IUser extends Document {
    username: string;

    email: string;
    thoughts: ObjectId[];
    friends: ObjectId[];
}

const userSchema = new Schema<IUser>(
    {
        username: {
            type: String,
            required: true,
            trim: true,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/, 'Please enter a valid email address.']
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought',
            },
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User',
            },
        ],
    },
    {   toJSON: {
        virtuals: true
    },
        timestamps: true,
        id: false,
    }
);

userSchema.virtual('friendCount').get(function () {
    return this.friends?.length;
  });

const User = model('User', userSchema);

export default User