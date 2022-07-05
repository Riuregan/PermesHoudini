import { Router } from 'express';
import { loginGerente, loginFunc, loginClient } from './controllers/login.controller.js'
import { getTestes, postTestes } from './controllers/testes.controller.js'
import { getLaboratorio } from './controllers/laboratorio.controller.js'


const routes = Router();

//login
routes.get('/loginClient/:cpf/:senha', loginClient);
routes.get('/loginFunc/:cpf/:senha', loginFunc);
routes.get('/loginGerente/:cpf', loginGerente);

//testes
routes.get('/testes', getTestes);
routes.post('/postTestes', postTestes);

//laboratorios
routes.get('/laboratorio', getLaboratorio);

export default routes;