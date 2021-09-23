import { IUserRepositry } from "@/domain/repository/user/IUserRepository";
import { FindUserRequest, FindUserResponse } from "./FindUserInterface";

class FindUserUseCase {
  private userReposiory: IUserRepositry;

  public constructor(userReposiory: IUserRepositry) {
    this.userReposiory = userReposiory;
  }

  public async getUser(request: FindUserRequest): Promise<FindUserResponse> {
    console.log(request.id);
    const user = await this.userReposiory.find(request.id);

    return {
      id: user.id,
      name: user.name,
      age: user.age,
    };
  }
}

export { FindUserUseCase };
