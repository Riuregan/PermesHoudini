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


//get func with cpf
export function getFuncCPF(req, res) {
    let users = new Array();
    console.log('3')
    let connection;

    oracledb.getConnection(dbConfig)
        .then((c) => {
            console.log('2')
            connection = c;
            return connection.execute("select * from funcionarios where cpf = :cpf", {
                cpf: req.params.cpf,
            });
        })
        .then((result) => {
            res.status(200).json(result);
        }).then((app) => {
            if (connection) {
                connection.close();
            }
        }).catch((error) => {
            res.status(500).json({ message: error.message || "Some error occurred!" });
        });

}