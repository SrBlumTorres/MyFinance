import express, { NextFunction, Request, Response } from 'express';
import path from 'path';
import 'dotenv/config';
import 'express-async-errors';
//Routßer de users
import userRouter from './routes/user.routes';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5500', 
  credentials: true,
}));

app.get('/', (req, res) => {
  res.sendFile('index.html', { root: path.join(process.cwd(), 'public') });
})

// Ruta de users, lo ideal sería hacerlo con routing, estructuramos mejor nuestro código
app.use('/users', userRouter);

// Middleware de manejo de errores
app.use((error: unknown, req: Request, res: Response, next: NextFunction) => {
  console.log('❌', error.message)
  res.status(500).send({ message: error.message })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})