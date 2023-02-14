import pino from "pino"
import winston from "winston"
import "winston-mongodb"
import "dotenv/config"
// const logger = pino({
//     level: process.env.NODE_ENV === 'production' ? 'info' : 'debug',
//     transport: {
//         target: 'pino-pretty',
//         options: {
//             colorize: true
//         }
//     }
// })

const MONGO_DB = process.env.MONGO_DB!;
const MONGODB_LOG_COLLECTION = process.env.COLLECTION_MONGODB_NAME_LOG;
console.log(MONGO_DB)
const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(winston.format.timestamp(), winston.format.json()),
    transports: [
        new winston.transports.File({filename: 'error.log', level: 'error'}),
        new winston.transports.File({filename: 'combined.log'}),
        new winston.transports.MongoDB({
            level: 'error',
            db: MONGO_DB,
            collection: MONGODB_LOG_COLLECTION,
            format: winston.format.combine(winston.format.timestamp(), winston.format.json())            
        })
    ],
    
})

if(process.env.NODE_ENV !== 'production'){
    logger.add(new winston.transports.Console({
        format: winston.format.simple()
    }))
}

export {logger}