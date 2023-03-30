import express from 'express';

import uadyfonApi from './routes/api/index.js';

export const createServer = () =>{

    
    const app = express();
    //settings
    
    
    app.use(express.json());
    //routes
    app.use('/uadyfon/api',uadyfonApi );
    
    return app
}

