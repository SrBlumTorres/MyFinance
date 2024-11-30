import express, { Request, Response } from 'express';
import 'dotenv/config';
import pool from './db/connection';
import query from './db/connection';
import { usersSelect } from './db';

const app = express();
const port = process.env.PORT || 3000;

// app.get('/', async (req: Request , res: Response) => {
//   const users = await query('SELECT * FROM users where id = ?', [1]);

  
//   res.send(users);
// })

app.get('/', (req, res) => {
  res.send(usersSelect);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
