import oracledb from "oracledb";
import { dbConfig } from '../dbConfig.js'
oracledb.autoCommit = true


//put usuario
export function putUsuario(req, res) {
    let connection;
    oracledb.getConnection(dbConfig)
        .then((c) => {
            connection = c;
            return connection.execute("update usuario SET nome = :nome , senha = :senha WHERE cpf = :cpf",
                {
                    cpf: req.params.cpf,
                    nome: req.body.nome,
                    senha: req.body.senha
                });
        }).then((c) => {
            res.status(200).json(c);
        }).then(() => {
            if (connection) {
                connection.close();
            }
        }).catch((error) => {
            res.status(500).json({ message: error.message || "Some error occurred!" });
        });
};

//post user

export function postUsuario(req, res) {
    let connection;
    oracledb.getConnection(dbConfig)
        .then((c) => {
            connection = c;
            return connection.execute(" insert into usuario (nome,email,cpf,senha,telefone) values (:nome, :email, :cpf, :senha, :telefone)", {
                nome: req.body.nome,
                email: req.body.email,
                cpf: req.body.cpf,
                senha: req.body.senha,
                telefone: req.body.telefone,
            });

        }).then((result) => {
            res.status(200).json(result);
        }).then(() => {
            if (connection) {
                connection.close();
            }
        }).catch((error) => {
            res.status(500).json({ message: error.message || "Some error occurred!" });
        });

};
