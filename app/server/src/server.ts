import express from 'express';
import http from 'http';
import mongoose from 'mongoose';
import cors from 'cors';
import loginRouter from './controllers/login.controller';
import notesRouter from './controllers/notes.controller';
import usersRouter from './controllers/user.controller';
import { config } from './utils/config';
import { logger } from './utils/logger';
import middleware from './utils/middleware';

logger.info('connecting to', config.MONGODB_URI);

mongoose
  .connect(config.MONGODB_URI)
  .then(() => {
    logger.info('connected to MongoDB');
  })
  .catch((error) => {
    logger.error('error connection to MongoDB: ', error.message);
  })

const app = express();

app.use(express.json());
app.use(express.static('build'));
app.use(cors());

app.use('/api/login', loginRouter);
app.use('/api/notes', notesRouter);
app.use('/api/users', usersRouter);

app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

const server = http.createServer(app);

server.listen(config.PORT, () => {
  logger.info(`Server running on port ${config.PORT}`);
})