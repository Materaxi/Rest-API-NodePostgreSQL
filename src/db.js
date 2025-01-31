import pg from 'pg'

export const pool = new pg.Pool({

    user: "postgres",
    host: "localhost",
    password: "postgres",
    database: "nodepg",
    port: "5432"
})

