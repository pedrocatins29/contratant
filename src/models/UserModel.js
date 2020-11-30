import db from "../config/db";

export const userModel = {
  findUserByParam(param, value) {
    const query = `select * from user where ${param} = ?`;
    return new Promise((resolve, reject) => {
      db.query(query, [value], (error, result) => {
        if (error) reject(error);
        resolve(result[0]);
      });
    });
  },

  findUsers() {
    const query = `select * from user`;
    return new Promise((resolve, reject) => {
      db.query(query, (error, result) => {
        if (error) reject(error);
        resolve(result);
      });
    });
  },

  createUser(
    nome,
    username,
    email,
    senha,
    photo,
    description,
    cellphone,
    Localidade_id
  ) {
    const query =
      "INSERT INTO user(nome,username,email,senha,photo,description,cellphone,Localidade_id)VALUES(?, ? ,? ,?, ?, ?, ?, ?)";
    console.log(query);
    return new Promise((resolve, reject) => {
      db.query(
        query,
        [
          nome,
          username,
          email,
          senha,
          photo,
          description,
          cellphone,
          Localidade_id,
        ],
        (error, result) => {
          if (error) {
            console.log(error);
            reject(new Error(error));
          }
          resolve(result);
        }
      );
    });
  },
};
