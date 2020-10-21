// Start: 11:30 - 11:50
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

// Routes
app.use('/api', require('./src/route/api'));
app.use('/', require('./src/route/index'));

// Assets (CSS, IMG)
app.use('/pub', express.static('./src/public/'));

app.listen(PORT, () => {
  console.log('server started at port ' + PORT);
});