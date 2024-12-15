import express, { NextFunction, Request, Response } from 'express';
import path from 'path';
import 'dotenv/config';
import 'express-async-errors';
import cors from 'cors';
import cookieParser from 'cookie-parser'
//Routers
import userRouter from './routes/user.routes';
import transactionRouter from './routes/transaction.routes';
import categoryRouter from './routes/category.routes';
import ValidationError from './models/ValidationError';
import HttpError from './models/HttpErrors';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: process.env.FRONTEND_URL , // Permite solo este origen, en caso contrario error de cors
  methods: ["GET", "POST", "PUT", "DELETE"], // Métodos HTTP permitidos
  credentials: true, // Si envías cookies o tokens
}));

app.get('/', (req, res) => {
  res.sendFile('index.html', { root: path.join(process.cwd(), 'public') });
})

// Ruta de users
app.use('/users', userRouter);

// Ruta de transacciones
app.use('/transactions', transactionRouter);

// Ruta de categorías
app.use('/categories', categoryRouter);
// Middleware de manejo de errores

// TODO Crear modelo  
app.use((error: unknown, req: Request, res: Response, next: NextFunction) => {
  console.log('❌', error.message)

  if (error instanceof ValidationError) {
    res.status(error.statusCode).send({
      message: error.message,
      errors: error.errors,
    });
    return;
  }
  if (error instanceof HttpError) {
    res.status(error.statusCode).send({
      message: error.message,
    });
    return;
  }

  if (error instanceof Error) {
    res.status(500).send({
      message: error.message,
    });
  }
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})