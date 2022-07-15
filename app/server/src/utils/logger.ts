import winston, { LogEntry } from 'winston';

const MESSAGE = Symbol.for('message') as unknown as string;

const timestamp = (): string => {
  const localTime = new Date().toLocaleString('en-US', {
    timeZone: 'Asia/Ho_Chi_Minh',
  })
  const now = new Date(localTime);
  const str = now.toISOString();
  return str;
}

const jsonFormatter = (logEntry: LogEntry): LogEntry => {
  const base = { timestamp: timestamp() };
  const json = Object.assign(base, logEntry);
  logEntry[MESSAGE] = JSON.stringify(json);
  return logEntry;
}

export const logger = winston.createLogger({
  transports: [new winston.transports.Console()],
  exceptionHandlers: [new winston.transports.Console()],
  format: winston.format(jsonFormatter)(),
})