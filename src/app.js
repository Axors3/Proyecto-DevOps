import express from 'express';
import {doConnection} from './db/db.js'

const app = express();

//settings
app.set('port',process.env.PORT || 9000);

//routes

//middlewares

app.listen(app.get('port'),async () => {
    console.log('Server on port 3000');
    await doConnection();
})


export default app