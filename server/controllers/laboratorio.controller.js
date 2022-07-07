import oracledb from "oracledb";
import { dbConfig } from '../dbConfig.js'
oracledb.autoCommit = true

//get laboratorios
export function getLaboratorio(req, res) {
    let connection;
    oracledb.getConnection(dbConfig)
        .then((c) => {
            connection = c;
            return connection.execute("select * from laboratorio");
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

//post laboratorios

export function postLaboratorios(req, res) {
    let connection;
    oracledb.getConnection(dbConfig)
        .then((c) => {
            connection = c;
            return connection.execute(" insert into laboratorio (nome,cep,numero,endereco,gerente_cpf) values (:nome, :cep, :numero, :endereco, :gerente_cpf)", {
                nome: req.body.nome,
                cep: req.body.cep,
                numero: req.body.numero,
                endereco: req.body.endereco,
                gerente_cpf: req.body.gerente_cpf,
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


//put laboratorio
export function putLaboratorios(req, res) {
    let connection;
    oracledb.getConnection(dbConfig)
        .then((c) => {
            connection = c;
            return connection.execute(" UPDATE laboratorio SET nome = :nome, cep = :cep, numero = :numero, endereco = :endereco WHERE gerente_cpf = :gerente_cpf",
                {
                    nome: req.body.nome,
                    cep: req.body.cep,
                    numero: req.body.numero,
                    endereco: req.body.endereco,
                    gerente_cpf: req.params.gerente_cpf
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

//delete laboratorio

export function deleteLaboratorio(req, res) {
    let connection;
    oracledb.getConnection(dbConfig)
        .then((c) => {
            connection = c;
            return connection.execute("DELETE FROM laboratorio WHERE gerente_cpf = :gerente_cpf",
                {
                    gerente_cpf: req.params.gerente_cpf
                });
        }).then(() => {
            res.status(200).json("User successfully deleted!");
        }).then(() => {
            if (connection) {
                connection.close();
            }
        }).catch((error) => {
            res.status(500).json({ message: error.message || "Some error occurred!" });
        });
};

