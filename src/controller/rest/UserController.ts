import { Request, Response } from "express";
import { FindUserRequest } from "@/usecase/user/FindUserInterface";
import { FindUserUseCase } from "@/usecase/user/FindUserUseCase";

class UserController {
  private readonly findUserUsecase: FindUserUseCase;
  constructor(findUserUsecase: FindUserUseCase) {
    this.findUserUsecase = findUserUsecase;
  }

  async findUser(req: Request, res: Response): Promise<void> {
    const requestId = Number(req.params.id);
    if (typeof requestId !== "number") {
      throw new Error(
        JSON.stringify({
          message: "不正なrequest idです",
        })
      );
    }
    const request = new FindUserRequest({ id: requestId });

    const response = await this.findUserUsecase.getUser(request);
    res.send(response);
  }
}

export { UserController };
