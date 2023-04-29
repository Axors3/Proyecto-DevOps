import {createServer} from './app.js'
import {doConnection} from './db/db.js';
const PORT = 3001;

const app = createServer()

app.listen(PORT,async () => {
    console.log(`Server on port ${PORT}`);
    await doConnection();
})
