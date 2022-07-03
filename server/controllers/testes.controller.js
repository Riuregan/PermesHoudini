import oracledb from "oracledb";
import { dbConfig } from '../dbConfig.js'

//get Testes
export function getTestes(req, res) {
    let users = new Array();
    let connection;
    console.log(req.body)
    oracledb.getConnection(dbConfig)
        .then((c) => {
            connection = c;
            return connection.execute("select * from testes");

        }).then((result) => {
            result.rows.forEach((elemento) => {
                let user = new Object();
                user.id_teste = elemento[0];
                user.usuario_cpf = elemento[1];
                users.push(user);
            });
            res.status(200).json(users);
        }).then((app) => {
            if (connection) {
                connection.close();
            }
        }).catch((error) => {
            res.status(500).json({ message: error.message || "Some error occurred!" });
        });

};