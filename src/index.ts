import express, { json } from 'express';
import 'express-async-errors';
import handleErrorsMiddleware from './middlewares/errorHandlerMiddleware.js';
import router from './routes/index.js';
import dotenv from 'dotenv';

dotenv.config({ path: '.env' });
const app = express();

app.use(json());
app.use(router);
app.use(handleErrorsMiddleware);

const port = Number(process.env.PORT) || 5000;
app.listen(port, () => {
  console.log(`Server is up and running on port ${port}`);
});