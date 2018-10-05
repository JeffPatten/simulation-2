const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
require('dotenv').config();
const controller = require('./controller');


massive(process.env.CONNECTION_URL).then(dbInstance => {
    console.log('database connected')    
    app.set('db', dbInstance);
})
.catch(err => console.log(err))

const app = express();
app.use(bodyParser.json());

app.get('/houses', controller.getAll);
app.post('/houses', controller.addHouse);
app.delete('/houses/:id', controller.deleteHouse);


const port=process.env.SERVER_PORT;
app.listen(port, () => {console.log(`Hard to port: ${port}`)})