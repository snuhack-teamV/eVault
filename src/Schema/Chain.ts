import mongoose from 'mongoose';

const chainSchema = new mongoose.Schema({
    id: String,
    timestamp: Number,
    prevBlockHash: String,
    nonce: Number,
    data: {
        heading: String,
        details: String,
        fileName: String,
    }
});

export default mongoose.model('chain', chainSchema);