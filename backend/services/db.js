import sqlite from 'better-sqlite3';
import path from 'path';
const db = new sqlite(path.resolve('database/appDb.db'), {fileMustExist: true});

function query(sql, params) {
  return db.prepare(sql).all(params);
}

export default query;