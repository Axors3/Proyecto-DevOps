import express from 'express';
import cors from 'cors';
import uadyfonApi from './routes/api/index.js';

export const createServer = () =>{

    
    const app = express();
    //settings
    app.use(cors());
    
    app.use(express.json());
    //routes
    app.use('/uadyfon/api',uadyfonApi );
    
    return app
}

