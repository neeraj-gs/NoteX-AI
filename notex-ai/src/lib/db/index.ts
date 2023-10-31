import {neon,neonConfig} from '@neondatabase/serverless'
import {drizzle} from 'drizzle-orm/neon-http'

neonConfig.fetchConnectionCache = true; //this will avaoid caching all connections so tht we reload the page every time

if(!process.env.DATABASE_URL){
    throw new Error("Plaese connect to tthe databse , Databse url is not specified")
}

const sql = neon(process.env.DATABASE_URL)

export const db = drizzle(sql);