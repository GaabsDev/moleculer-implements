import dotenv from 'dotenv';
import path from 'path';

dotenv.config()

dotenv.config({
    path: path.resolve(__dirname, `${process.env.NODE_ENV}.env`)
});

export const config = {
    NODE_ENV : process.env.NODE_ENV || 'development',
    PORT : process.env.PORT || 4000
}