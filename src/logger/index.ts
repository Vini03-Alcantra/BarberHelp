import pino from "pino"
import winston, {createLogger, transports, format} from "winston"

// const logger = pino({
//     level: process.env.NODE_ENV === 'production' ? 'info' : 'debug',
//     transport: {
//         target: 'pino-pretty',
//         options: {
//             colorize: true
//         }
//     }
// })

const logger = winston.createLogger({
    level: 'info',
    format: format.combine(format.timestamp(), format.json()),
    transports: [
        new winston.transports.File({filename: 'error.log', level: 'error'}),
        new winston.transports.File({filename: 'combined.log'})
        new transports.
    ]
})

if(process.env.NODE_ENV !== 'production'){
    logger.add(new winston.transports.Console({
        format: winston.format.simple()
    }))
}

export {logger}