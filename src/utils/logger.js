import { createLogger, format, transports } from 'winston';
//import winston from 'winston/lib/winston/config';

const levels = {
    error: 0,
    warn: 1,
    info: 2,
    http: 3,
    verbose: 4,
    debug: 5,
    silly: 6
};

export const logger = createLogger({
    transports: [
        new transports.File({
            filename:'./logs/logginfile.log',
            level:'info',
            format: format.combine(format.timestamp(),format.json()),
            transports: [new transports.Console()]
        }),
        new transports.File({
            filename:'./logs/logginfile.log',
            level:'error',
            format: format.combine(format.timestamp(),format.json()),
            transports: [new transports.Console()]
        }),
        new transports.File({
            filename:'./logs/logginfile.log',
            level:'debug',
            format: format.combine(format.timestamp(),format.json()),
            transports: [new transports.Console()]
        }),
        new transports.File({
            filename:'./logs/logginfile.log',
            level:'warn',
            format: format.combine(format.timestamp(),format.json()),
            transports: [new transports.Console()]
        })
    ]
})