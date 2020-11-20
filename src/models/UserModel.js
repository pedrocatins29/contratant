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

  createProfissao() {},

  createUser(
    nome,
    username,
    email,
    senha,
    photo,
    description,
    cellphone,
    prestador,
    Localidade_id,
    date_created
  ) {
    const query =
      "INSERT INTO contratant(nome,username,email,senha,photo,description,cellphone,prestador,Localidade_id,date_created)VALUES(?, ? ,? ,?, ?, ?, ?, ?, ?, ?)";
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
          prestador,
          Localidade_id,
          date_created,
        ],
        (error, result) => {
          if (error) reject(new Error(error));
          resolve(result);
        }
      );
    });
  },
  updateUser(nome, email, photo, description, cellphone, id) {
    const query =
      "UPDATE `contratant`.`user` SET `nome` = ? , `email` = ? , `photo` = ? , `description` = ? ,`cellphone` = ? , WHERE `id` = ? ";
    return new Promise((resolve, reject) => {
      db.query(
        query,
        [nome, email, photo, description, cellphone, id],
        (error, result) => {
          if (error) reject(error);
          resolve(result.changedRows);
        }
      );
    });
  },
};
