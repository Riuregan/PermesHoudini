import { Router } from 'express';
import { loginGerente, loginFunc, loginClient } from './controllers/login.controller.js'
import { getTestes, getTestesFunc, postTestes } from './controllers/testes.controller.js'
import { getLaboratorio, postLaboratorios, putLaboratorios } from './controllers/laboratorio.controller.js'
import { getFuncionarios } from './controllers/funcionarios.controller.js'
import { getMateriais, postMateriais, putMateriais } from './controllers/materiais.controller.js'


const routes = Router();

//login
routes.get('/loginClient/:cpf/:senha', loginClient);
routes.get('/loginFunc/:cpf/:senha', loginFunc);
routes.get('/loginGerente/:cpf', loginGerente);

//testes
routes.get('/testes', getTestes);
routes.get('/testesFunc/:cpf', getTestesFunc);
routes.post('/postTestes', postTestes);// erro da data

//laboratorios
routes.get('/laboratorio', getLaboratorio);
routes.post('/postLaboratorio', postLaboratorios);
routes.put('/putLaboratorio/:cpf_gerente', putLaboratorios) // ajustar

//funcionarios
routes.get('/funcionarios', getFuncionarios);

//materiais
routes.get('/materiais', getMateriais);
routes.post('/postMateriais', postMateriais);
routes.put('/putMateriais/:id_material', putMateriais) //connection is not defined

export default routes;