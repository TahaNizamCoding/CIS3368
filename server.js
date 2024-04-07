const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 8080;

// Configure Express to use EJS for templating
app.set('view engine', 'ejs');

// Route to render the home page with comments from DummyJSON API
app.get('/', async (req, res) => {
    try {
        const { data } = await axios.get('https://dummyjson.com/comments');
        const comments = data.comments.slice(0, 10);

        res.render('index', { comments });
    } catch (error) {
        console.error('Failed to fetch comments:', error);
        res.status(500).send('Error fetching comments');
    }
});

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));