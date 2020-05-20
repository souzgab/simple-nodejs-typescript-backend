import { Router } from 'express'
import UserController from './controllers/User.controller';


const routes = Router();


routes.get("/users", UserController.getUsers)

export default routes