import oracledb from "oracledb";
import { dbConfig } from '../dbConfig.js'

//login Client
export function loginClient(req, res) {
    let users = new Array();
    console.log('3')
    let connection;
    console.log(req.params.senha);
    console.log(req.params.cpf);
    oracledb.getConnection(dbConfig)
        .then((c) => {
            console.log('2')
            connection = c;
            return connection.execute("select * from usuario where cpf = :cpf and senha = :senha", {
                cpf: req.params.cpf,
                senha: req.params.senha
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

//login Func
export function loginFunc(req, res) {
    let users = new Array();
    let connection;
    console.log(req.params.senha);
    oracledb.getConnection(dbConfig)
        .then((c) => {
            console.log('1');
            connection = c;
            return connection.execute("select * from funcionarios where cpf = :cpf and senha = :senha", {
                cpf: req.params.cpf,
                senha: req.params.senha
            });
        }).then((result) => {
            console.log('func')
            console.log(result);
            res.status(200).json(result);
        }).then((app) => {
            if (connection) {
                connection.close();
            }
        }).catch((error) => {
            res.status(500).json({ message: error.message || "Some error occurred!" });
        });

}

//Login gerente
export function loginGerente(req, res) {
    let users = new Array();
    let connection;
    console.log(req.params.senha);
    oracledb.getConnection(dbConfig)
        .then((c) => {
            connection = c;
            return connection.execute("select * from laboratorio where gerente_cpf = :cpf", {
                cpf: req.params.cpf,
            });
        }).then((result) => {
            console.log(result);
            res.status(200).json(result);
        }).then((app) => {
            if (connection) {
                connection.close();
            }
        }).catch((error) => {
            res.status(500).json({ message: error.message || "Some error occurred!" });
        });

}

