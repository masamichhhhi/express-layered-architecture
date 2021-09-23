import express from "express";
import { UserController } from "@/controller/rest/UserController";
import { MysqlConnection } from "@/infrastructure/MysqlConnection";
import { UserRepositoryImpl } from "@/infrastructure/UserRepositoryImpl";
import { FindUserUseCase } from "@/usecase/user/FindUserUseCase";

const server = express();
const router = express.Router();

const mysqlConnection = new MysqlConnection();

const userReposiory = new UserRepositoryImpl(mysqlConnection);
const findUserUsecase = new FindUserUseCase(userReposiory);

const controllers = {
  user: new UserController(findUserUsecase),
};

router.get("/", (req, res) => {
  res.send("hello world");
});
router.get("/users/:id", (req, res) => {
  controllers.user.findUser(req, res);
});

server.use(router);
server.listen(3000, () => {
  console.log("listening on 3000");
});
