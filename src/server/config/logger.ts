import morgan from 'morgan';
import { Logger } from 'tslog';
import env from './env';

const log = new Logger({
    minLevel: env.LOG_LEVEL,
});

const loggerMiddleware = morgan('combined', {
    stream: {
        write: (message: string) => log.info(message.trim()),
    },
});

export { loggerMiddleware, log };
