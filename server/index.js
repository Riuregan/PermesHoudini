import oracledb from "oracledb";
import express from "express";
import cors from "cors";
import routes from './routes.js'

const app = express();
oracledb.autoCommit = true

oracledb.initOracleClient({
    libDir: "C:\\Users\\vitor\\Desktop\\instantclient_21_6",
});

app.use(express.json());
app.use(cors());
app.use(routes);


//EXEMPLOS ->


// app.get("/lab", (req, res) => {
//     let users = new Array();
//     let connection;
//     oracledb.getConnection(dbConfig)
//         .then((c) => {
//             connection = c;
//             return connection.execute("select * from time");

//         }).then((result) => {
//             // result.rows.forEach((elemento) => {
//             //     let user = new Object();
//             //     user.id = elemento[0];
//             //     user.nome = elemento[1];
//             //     users.push(user);
//             // });
//             res.status(200).json(result);
//         }).then((app) => {
//             if (connection) {
//                 connection.close();
//             }
//         }).catch((error) => {
//             res.status(500).json({ message: error.message || "Some error occurred!" });
//         });

// });

// app.post('/create', (req, res) => {
//     oracledb.getConnection(dbConfig)
//         .then((c) => {
//             connection = c;
//             return connection.execute(`insert into time (id, nome) values (:id, :nome)`, {
//                 id: 33,
//                 nome: 'efgigdfff'
//             }, { autoCommit: true });
//         }).then((result) => {
//             console.log(result)
//             res.status(201).json("User successfully created!");
//         }).then(() => {
//             if (connection) {
//                 connection.close();
//             }
//         }).catch((error) => {
//             res.status(500).json({ message: error.message || "Some error occurred!" });
//         });
// });

// app.delete('/delete/:userId', (req, res) => {
//     oracledb.getConnection(dbConfig)
//         .then((c) => {
//             connection = c;
//             return connection.execute("DELETE FROM time WHERE id = :id",
//                 {
//                     id: req.params.userId
//                 }, { autoCommit: true });
//         }).then(() => {
//             res.status(200).json("User successfully deleted!");
//         }).then(() => {
//             if (connection) {
//                 connection.close();
//             }
//         }).catch((error) => {
//             res.status(500).json({ message: error.message || "Some error occurred!" });
//         });
// });

// app.put('/update/:userId', (req, res) => {
//     oracledb.getConnection(dbConfig)
//         .then((c) => {
//             connection = c;
//             return connection.execute("UPDATE time SET nome = :nome WHERE id = :id",
//                 {
//                     id: req.params.userId,
//                     nome: req.body.nome,
//                 }, { autoCommit: true });
//         }).then(() => {
//             res.status(200).json("User successfully updated! ID: " + req.params.userId);
//         }).then(() => {
//             if (connection) {
//                 connection.close();
//             }
//         }).catch((error) => {
//             res.status(500).json({ message: error.message || "Some error occurred!" });
//         });
// });

app.listen(3001, () => {
    console.log("rodando na porta 3001");
});
