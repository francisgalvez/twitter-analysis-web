const mongoose = require('mongoose');
const { Schema } = mongoose;

const TweetSchema = new Schema({
    id: { type: String, required: true },
    topics: { type: Array, required: true },
    text: { type: String, required: true },
    source: { type: String, required: true },
    hashtags_count: { type: Number, required: true },
    user_mentions_count: { type: Number, required: true },
    user_name: { type: String, required: true },
    followers: { type: Number, required: true },
    friends: { type: Number, required: true },
    verified: { type: Boolean, required: true },
    geo_enabled: { type: Boolean, required: true },
    location: { type: String, required: false },
    longitude: { type: Number, required: true },
    latitude: { type: Number, required: true },
    sensitive: { type: Boolean, required: false },
    lang: { type: String, required: false },
    timestamp: { type: String, required: true },
    date: { type: String, required: true }
});

TweetSchema.index({ topics: 1 });
