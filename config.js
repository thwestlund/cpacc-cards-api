import * as dotenv from 'dotenv';
dotenv.config({ path: `.env.${process.env.NODE_ENV}`, debug: true });

/*const server = process.env.AZURE_SQL_SERVER;
const database = process.env.AZURE_SQL_DATABASE;
const port = parseInt(process.env.AZURE_SQL_PORT);
const type = process.env.AZURE_SQL_AUTHENTICATIONTYPE;
const user = process.env.AZURE_SQL_USERNAME;
const password = process.env.AZURE_SQL_PASSWORD;

export const config = {
    server,
    port,
    database,
    user,
    password,
    authentication: {
        type,
    },
    options: {
        encrypt: true
    }
};*/

const server = process.env.AZURE_SQL_SERVER;
const database = process.env.AZURE_SQL_DATABASE;
const port = parseInt(process.env.AZURE_SQL_PORT);
const user = process.env.AZURE_SQL_USERNAME;
const password = process.env.AZURE_SQL_PASSWORD;

export const config = {
    server,
    port,
    database,
    user,
    password,
    options: {
        encrypt: true
    }
};