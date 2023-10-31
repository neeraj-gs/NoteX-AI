//this is where we specify schema configuration for drizzle kit
import type { Config } from "drizzle-kit"; //tell us what config is needed
import * as dotenv from 'dotenv'

dotenv.config({
    path: '.env' //just tells the path so taht drizle gets acces to the .env file
})


export default {
    driver: 'pg',
    schema: './src/lib/db/schema.ts',
    dbCredentials:{
        connectionString: process.env.DATABASE_URL!,
    }
} satisfies Config;


