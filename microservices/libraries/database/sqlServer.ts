import * as dotenv from 'dotenv'
import { DataSource } from 'typeorm'

dotenv.config()

export const sqlServer = new DataSource({
    type:"mssql",
    host:process.env.SQLSERVER_HOST,
    port:Number(process.env.SQLSERVER_PORT),
    username:process.env.SQLSERVER_USERNAME,
    password:process.env.SQLSERVER_PASSWORD,
    database:process.env.SQLSERVER_DATABASE,
    synchronize:Boolean(process.env.SQLSERVER_SYNCRONIZE),
    logging:Boolean(process.env.SQLSERVER_LOGGING),
    entities:[process.env.SQLSERVER_ENTITY],
    subscribers:[process.env.SQLSERVER_SUBSCRIBERS],
    migrations:[process.env.SQLSERVER_MIGRATIONS]
})