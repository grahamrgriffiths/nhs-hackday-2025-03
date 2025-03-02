import query from '../services/db.js';
import config from '../config.js';

function getSymptoms(page = 1) {
  const offset = (page - 1) * config.listPerPage;
  const data = query(`SELECT * FROM Symptoms LIMIT ?,?`, [offset, config.listPerPage]);
  const meta = {page};

  return {
    data,
    meta
  }
}

export default getSymptoms;