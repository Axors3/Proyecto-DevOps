import {createServer} from './app.js'
import {doConnection} from './db/db.js';
import {logger} from './utils/logger.js';
const PORT = 3001;

const app = createServer()

app.listen(PORT,async () => {
    logger.log('info',`Server on port ${PORT}`);
    await doConnection();
})
