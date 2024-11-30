import express, { Request, Response } from 'express';
import path from 'path';
import 'dotenv/config';
//Routßer de users
import userRouter from './routes/user.routes';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.get('/', (req, res) => {
  res.sendFile('index.html', { root: path.join(process.cwd(), 'public') });
})

// Ruta de users, lo ideal sería hacerlo con routing, estructuramos mejor nuestro código
app.use('/users', userRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})