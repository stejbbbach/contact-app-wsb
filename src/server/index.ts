import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import env from './config/env';
import connectDB from './config/db';
import { loggerMiddleware } from './config/logger';
import router from './routes/router';

connectDB();

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(loggerMiddleware);

app.use('/api', router);

const PORT = env.PORT;

app.listen(PORT, () => {
    console.log(`Server running in ${env.NODE_ENV} mode on port ${PORT}`);
});
//
//
