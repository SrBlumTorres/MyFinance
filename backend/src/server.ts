import express, { Request, Response } from 'express';
import 'dotenv/config';

//Router de users
import userRouter from './routes/user.routes';

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('<h1> My Finance </h1>')
})

// Ruta de users, lo ideal sería hacerlo con routing, estructuramos mejor nuestro código
app.use('/users', userRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})