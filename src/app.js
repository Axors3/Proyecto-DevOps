import express from 'express';

const app = express();

//settings
app.set('port',process.env.PORT || 3000);

//routes

//middlewares

app.listen(app.get('port'),() => {
    console.log('Server on port 3000');
})


export default app