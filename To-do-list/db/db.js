import pg from "pg";

const pool = new pg.Pool({
    user: "postgres",
    host: "localhost",
    database: "to-do-list",
    password: "002111",
    port: 5432,
  });
pool.connect()

pool.on("connect", () => {
    console.log("Connected to the database!");
  });
pool.on("error", (err) => {
    console.error("Unexpected error on idle client", err);
    process.exit(-1);
  });
export default pool;