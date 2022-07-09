import { Router } from 'express';
import { loginGerente, loginFunc, loginClient } from './controllers/login.controller.js'
import { getTestes, getTestesFunc, postTestes, putTestes, deleteTestes } from './controllers/testes.controller.js'
import { getLaboratorio, postLaboratorios, putLaboratorios, deleteLaboratorio } from './controllers/laboratorio.controller.js'
import { getFuncionarios, putFuncionarios } from './controllers/funcionarios.controller.js'
import { getMateriais, postMateriais, putMateriais, deleteMateriais } from './controllers/materiais.controller.js'
import { putUsuario, postUsuario } from './controllers/usuario.controller.js'

const routes = Router();

//login
routes.get('/loginClient/:cpf/:senha', loginClient);
routes.get('/loginFunc/:cpf/:senha', loginFunc);
routes.get('/loginGerente/:cpf', loginGerente);

//testes
routes.get('/testes', getTestes);
routes.get('/testesFunc/:cpf', getTestesFunc);
routes.post('/postTestes', postTestes);
routes.put('/putTestes/:id_teste', putTestes);
routes.delete('/deleteTestes/:id_teste', deleteTestes);

//laboratorios
routes.get('/laboratorio', getLaboratorio);
routes.post('/postLaboratorio', postLaboratorios);
routes.put('/putLaboratorio/:gerente_cpf', putLaboratorios)
routes.delete('/deleteLaboratorio/:gerente_cpf', deleteLaboratorio)

//funcionarios
routes.get('/funcionarios', getFuncionarios);
routes.put('/putFuncionarios/:cpf', putFuncionarios);


//materiais
routes.get('/materiais', getMateriais);
routes.post('/postMateriais', postMateriais);
routes.put('/putMateriais/:id_material', putMateriais);
routes.delete('/deleteMateriais/:nome', deleteMateriais)

//usuarios
routes.put('/putUsuario/:cpf', putUsuario)
routes.post('/postUsuario', postUsuario)

export default routes;