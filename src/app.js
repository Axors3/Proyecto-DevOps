import express from 'express';

import uadyfonApi from './routes/api/index.js';

import cors from 'cors'

export const createServer = () =>{

    
    const app = express();
    //settings
    
    
    app.use(express.json());
    //enable cors
    app.use(cors());
    //routes
    app.use('/uadyfon/api',uadyfonApi );
    
    return app
}

