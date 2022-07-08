import { Router } from 'express';
import { loginGerente, loginFunc, loginClient } from './controllers/login.controller.js'
import { getTestes, getTestesFunc, postTestes, putTestes } from './controllers/testes.controller.js'
import { getLaboratorio, postLaboratorios, putLaboratorios, deleteLaboratorio } from './controllers/laboratorio.controller.js'
import { getFuncionarios, getFuncCPF } from './controllers/funcionarios.controller.js'
import { getMateriais, postMateriais, putMateriais, deleteMateriais } from './controllers/materiais.controller.js'
import { putUsuario, getClientCPF, postUsuario } from './controllers/usuario.controller.js'

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

//laboratorios
routes.get('/laboratorio', getLaboratorio);
routes.post('/postLaboratorio', postLaboratorios);
routes.put('/putLaboratorio/:gerente_cpf', putLaboratorios) // ajustar
routes.delete('/deleteLaboratorio/:gerente_cpf', deleteLaboratorio) // ajustar

//funcionarios
routes.get('/funcionarios', getFuncionarios);
routes.get('/getFuncCPF/:cpf', getFuncCPF);

//materiais
routes.get('/materiais', getMateriais);
routes.post('/postMateriais', postMateriais);
routes.put('/putMateriais/:id_material', putMateriais);
routes.delete('/deleteMateriais/:nome', deleteMateriais)

//usuarios
routes.put('/putUsuario/:cpf', putUsuario)
routes.get('/getClientCPF/:cpf', getClientCPF)
routes.post('/postUsuario', postUsuario)

export default routes;