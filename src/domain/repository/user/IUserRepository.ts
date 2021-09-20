import { User } from "@/domain/model/user";
import { CreateUserDTO, UpdateUserDTO } from "./dto";

interface IUserRepositry {
  // findAll(): Promise<User[]>;
  find(id: number): Promise<User>;
  // create(user: CreateUserDTO): Promise<void>;
  // update(user: UpdateUserDTO): Promise<void>;
  // delete(id: number): Promise<void>;
}

export { IUserRepositry };
