import oracledb from "oracledb";
import { dbConfig } from '../dbConfig.js'
oracledb.autoCommit = true

//get laboratorios
export function getLaboratorio(req, res) {
    let users = new Array();
    let connection;
    console.log(req.body)
    oracledb.getConnection(dbConfig)
        .then((c) => {
            connection = c;
            return connection.execute("select * from laboratorio");

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

//post laboratorios

export function postLaboratorios(req, res) {
    let users = new Array();
    let connection;
    console.log(req.body)
    console.log('req.body')
    oracledb.getConnection(dbConfig)
        .then((c) => {
            connection = c;
            return connection.execute(" insert into laboratorio (nome,cep,numero,gerente_cpf) values (:nome, :cep, :numero, :gerente_cpf)", {
                nome: req.body.nome,
                cep: req.body.cep,
                numero: req.body.numero,
                gerente_cpf: req.body.gerente_cpf,
            });

        }).then((result) => {
            console.log('result')
            console.log(result)
            res.status(200).json(result);
        }).then((app) => {
            if (connection) {
                connection.close();
            }
        }).catch((error) => {
            res.status(500).json({ message: error.message || "Some error occurred!" });
        });

};


//put laboratorio

export function putLaboratorios(req, res) {
    let connection;
    oracledb.getConnection(dbConfig)
    l
        .then((c) => {
            console.log(c)
            console.log("AQUII")
            connection = c;
            return connection.execute(" UPDATE laboratorio SET nome = :nome , numero = :numero, cep = :cep WHERE gerente_cpf = :gerente_cpf",
                {
                    nome: req.body.nome,
                    cep: req.body.cep,
                    numero: req.body.numero,
                    gerente_cpf: req.params.gerente_cpf
                });
        }).then((c) => {
            console.log('AQUIIddII')
            console.log(c)
            res.status(200).json(c);
        }).then(() => {
            if (connection) {
                connection.close();
            }
        }).catch((error) => {
            res.status(500).json({ message: error.message || "Some error occurred!" });
        });
};

