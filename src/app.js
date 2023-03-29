import express from 'express';

import uadyfonApi from './routes/api/index.js';
const app = express();
//settings


app.use(express.json());
//routes
app.use('/uadyfon/api',uadyfonApi );


export default app