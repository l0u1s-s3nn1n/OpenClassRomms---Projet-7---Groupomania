const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema(
    {
        posterID: {
            type: String,
            trim: true,
        },
        message: {
            type: String,
            trim: true,
            maxLength: 500,
    },
        picture: {
            type: String,
        },
        video: {
            type: String,
        },
        likers: {
            type: [String],
            required: true,
        },
        comments: {
            type: [
                {
                    commenterId: String,
                    commenterPseudo: String,
                    text: String,
                    timestamp: Number,
                }
            ],
            required: true,
        },
    },
        {
            timestamps: true,
        }
);

module.exports = mongoose.model('post', PostSchema);