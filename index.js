const { app } = require('./build/server.js');

const port = process.env.PORT || 8080;

app.listen(port, () => console.log('Application is started on localhost:', port));
