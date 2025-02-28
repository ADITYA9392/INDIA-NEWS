# INDIA-NEWS
#index.jsconst express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// स्टैटिक फाइल्स सर्व करने के लिए
app.use(express.static(path.join(__dirname, 'public')));

// होम पेज के लिए रूट
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
#package.jsonconst express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// स्टैटिक फाइल्स सर्व करने के लिए
app.use(express.static(path.join(__dirname, 'public')));

// होम पेज के लिए रूट
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
<!-- public/index.html -->
<!DOCTYPE html>
<html lang="hi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>India News</title>
  <!-- Bootstrap CSS -->
  <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
  <link href="/styles.css" rel="stylesheet">
</head>
<body>
  <div class="container">
    <h1>India News</h1>
    <p>यहाँ पर राष्ट्रीय समाचार प्रदर्शित होंगे।</p>
  </div>
  <!-- Bootstrap JS और अन्य स्क्रिप्ट्स -->
  <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.3/dist/umd/popper.min.js"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
  <script src="/script.js"></script>
</body>
</html>


