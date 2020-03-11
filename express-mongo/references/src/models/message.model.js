const { Schema, model } = require('mongoose');

const messageSchema = new Schema({
  sender: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  body: String,
}, {
  timestamps: true,
});

const Message = model('Message', messageSchema);

module.exports = Message;
