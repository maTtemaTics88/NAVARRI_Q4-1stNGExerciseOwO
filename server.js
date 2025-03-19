const express = require('express');
const hbs = require('hbs');
const app = express();
const port = 3000;

// Set the view engine to Handlebars
app.set('view engine', 'hbs');
app.set('views', './views');

// Register partials
hbs.registerPartials('./views/partials')

// Serve static files from the "public" folder
app.use(express.static('public'));

// Middleware to parse URL-encoded bodies (form data)
app.use(express.urlencoded({ extended: true }));

// Define a route
app.get('/', (req, res) => {
  res.render('index');
});

// Handle form submission
app.post('/submit', (req, res) => { 
  const { sideLength } = req.body;
  res.render('draw', { input: 'Form Submission', sideLength });
});

app.get('/draw', (req, res) => {
  const sideLength = req.query.sideLength; // Extract the sideLength query parameter
  res.render('draw', { input: 'Query Parameter', sideLength }); // Pass it to the draw view
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
