import express from 'express';
import cors from 'cors';
import travelRoutes from './routes/info.routes.js'
const port = 9000;

const app = express();
app.use(cors({
    origin : 'http://localhost:5173',
    credentials : true 
}));
app.use('/api', travelRoutes);

app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})