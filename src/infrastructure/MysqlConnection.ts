import mysql, { Pool } from "mysql2";
import { IDBConnection } from "./IDBConnection";

class MysqlConnection extends IDBConnection {
  private pool: Pool;
  public constructor() {
    super();
    this.pool = mysql.createPool({
      connectionLimit: 5,
      host: process.env.DB_HOST_DEV,
      user: "root",
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
      port: Number(process.env.DB_PORT),
      insecureAuth: false,
    });
    this.pool.getConnection((error, connection) => {
      if (error) {
        console.error(error);
        if (error.code === "PROTOCOL_CONNECTION_LOST") {
          console.error("Database connection was closed.");
        }
        if (error.code === "ER_CON_COUNT_ERROR") {
          console.error("Database has too many connections.");
        }
        if (error.code === "ECONNREFUSED") {
          console.error("Database connection was refused.");
        }
      }

      if (connection) connection.release();
      return;
    });

    this.pool.on("connection", (): void => {
      console.log("mysql connection create");
    });

    this.pool.on("release", (connection): void => {
      console.log("Connection %d released", connection.threadId);
    });
  }

  public execute(query: string, params: number | string | null) {
    if (params) {
      return this.pool.query(query, params);
    } else {
      return this.pool.query(query);
    }
  }
}

export { MysqlConnection };
