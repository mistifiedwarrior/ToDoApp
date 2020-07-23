const {app} = require('./src/router');

const port = 4000;
app.listen(port, () => console.log(`Server is listening on ${port}`));
