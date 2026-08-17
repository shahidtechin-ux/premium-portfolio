import mongoose from 'mongoose';

const ContactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name.'],
  },
  email: {
    type: String,
    required: [true, 'Please provide an email.'],
  },
  whatsapp: {
    type: String,
  },
  message: {
    type: String,
    required: [true, 'Please provide a message.'],
  },
  status: {
    type: String,
    default: 'Unread', // Admin panel me pata chalega lead padhi ya nahi
  }
}, { timestamps: true });

export default mongoose.models.Contact || mongoose.model('Contact', ContactSchema);