import oracledb from "oracledb";
import { dbConfig } from '../dbConfig.js'
oracledb.autoCommit = true

//get laboratorios
export function getMateriais(req, res) {
    let users = new Array();
    let connection;
    oracledb.getConnection(dbConfig)
        .then((c) => {
            connection = c;
            return connection.execute("select * from material");

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

//post materiais

export function postMateriais(req, res) {
    let users = new Array();
    let connection;
    console.log('req.body')
    oracledb.getConnection(dbConfig)
        .then((c) => {
            connection = c;
            return connection.execute(" insert into material (nome,quantidade,id_material) values (:nome, :quantidade, :id_material)", {
                nome: req.body.nome,
                quantidade: req.body.quantidade,
                id_material: req.body.id_material,
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


//put materiais

export function putMateriais(req, res) {
    oracledb.getConnection(dbConfig)
        .then((c) => {
            console.log(c)
            console.log("AQUII")
            connection = c;
            return connection.execute("UPDATE material SET nome = :nome , quantidade = :quantidade WHERE id_material = :id_material",
                {
                    nome: req.body.nome,
                    quantidade: req.body.quantidade,
                    id_material: req.params.id_material,
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

