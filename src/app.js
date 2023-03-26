import express from 'express';
import {doConnection} from './db/db.js';
import uadyfonApi from './routes/api/index.js';
const app = express();
//settings
const PORT = 3000;

app.use(express.json());
//routes
app.use('/uadyfon/api',uadyfonApi );

app.listen(PORT,async () => {
    console.log(`Server on port ${PORT}`);
    await doConnection();
})


export default app