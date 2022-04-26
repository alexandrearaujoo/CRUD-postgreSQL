import pg from "pg";

const database = new pg.Client({
  user: "alexandre",
  host: "localhost",
  database: "db_users",
  password: "1234",
  port: 5432,
});

export const startDatabase = async () => {
  await database.connect();
};

export default database;
