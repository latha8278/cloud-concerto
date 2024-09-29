const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB (events database)
mongoose.connect('mongodb://localhost:27017/cloud_concerto', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Event model
const Event = mongoose.model('Event', new mongoose.Schema({
  name: String,
  description: String,
  genre: String,
  language: String,
  livestream_url: String,
}));

// API endpoint to fetch events by language
app.get('/api/events', async (req, res) => {
  const { lang } = req.query;
  const events = await Event.find({ language: lang });
  res.json(events);
});

// Start server
app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
