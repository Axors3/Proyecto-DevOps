import app from './app.js'
import {doConnection} from './db/db.js';
const PORT = 3000;

app.listen(PORT,async () => {
    console.log(`Server on port ${PORT}`);
    await doConnection();
})
