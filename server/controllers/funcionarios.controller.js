import oracledb from "oracledb";
import { dbConfig } from '../dbConfig.js'
oracledb.autoCommit = true

//get laboratorios
export function getFuncionarios(req, res) {
    let users = new Array();
    let connection;
    console.log(req.body)
    oracledb.getConnection(dbConfig)
        .then((c) => {
            connection = c;
            return connection.execute("select * from funcionarios");

        }).then((result) => {
            res.status(200).json(result);
        }).then((app) => {
            if (connection) {
                connection.close();
            }
        }).catch((error) => {
            res.status(500).json({ message: error.message || "Some error occurred!" });
        });

};

//put usuario
export function putFuncionarios(req, res) {
    let connection;
    oracledb.getConnection(dbConfig)
        .then((c) => {
            connection = c;
            return connection.execute("update funcionarios SET nome = :nome , senha = :senha WHERE cpf = :cpf",
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