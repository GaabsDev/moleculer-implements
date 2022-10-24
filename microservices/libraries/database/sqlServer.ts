import * as dotenv from 'dotenv'

dotenv.config()

export const SqlServer = new DataSource({
    type:process.env.SQLSERVER_TYPE,
    host:process.env.SQLSERVER_HOST,
    port:process.env.SQLSERVER_PORT,
    username:process.env.SQLSERVER_USERNAME,
    password:process.env.SQLSERVER_PASSWORD,
    database:process.env.SQLSERVER_DATABASE,
    synchronize:process.env.SQLSERVER_SYNCRONIZE,
    logging:process.env.SQLSERVER_LOGGING,
    entities:process.env.SQLSERVER_ENTITY,
    subscribers:process.env.SQLSERVER_SUBSCRIBERS,
    migrations:process.env.SQLSERVER_MIGRATIONS
})