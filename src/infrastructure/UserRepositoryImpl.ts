import { User } from "@/domain/model/user";
import { IUserRepositry } from "@/domain/repository/user/IUserRepository";
import { IDBConnection } from "./IDBConnection";

class UserRepositoryImpl implements IUserRepositry {
  private connection: IDBConnection;

  constructor(connection: IDBConnection) {
    this.connection = connection;
  }

  private convertModel(data: User): User {
    const user = new User(data.id, data.name, data.age);
    return user;
  }

  public async find(id: number): Promise<User> {
    const queryResults = await this.connection.execute(
      "select * from Users where id = ? limit 1",
      id
    );
    return this.convertModel(queryResults[0]);
  }
}

export { UserRepositoryImpl };
