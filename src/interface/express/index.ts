import express from "express";
import { UserController } from "@/controller/rest/UserController";
import { MysqlConnection } from "@/infrastructure/MysqlConnection";
import { UserRepositoryImpl } from "@/infrastructure/UserRepositoryImpl";
import { FindUserUseCase } from "@/usecase/user/FindUserUseCase";

const router = express.Router();

const mysqlConnection = new MysqlConnection();

const userReposiory = new UserRepositoryImpl(mysqlConnection);
const findUserUsecase = new FindUserUseCase(userReposiory);

const controllers = {
  user: new UserController(findUserUsecase),
};

const server = express();

router.get("/users", controllers.user.findUser);

server.use(router);
