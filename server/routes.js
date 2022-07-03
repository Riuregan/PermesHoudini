import { Router } from 'express';
import { loginGerente, loginFunc, loginClient } from './controllers/user.controller.js'
import { getTestes } from './controllers/testes.controller.js'


const routes = Router();

//login
routes.get('/loginClient/:cpf/:senha', loginClient);
routes.get('/loginFunc/:cpf/:senha', loginFunc);
routes.get('/loginGerente/:cpf', loginGerente);

//testes
routes.get('/testes', getTestes);

export default routes;