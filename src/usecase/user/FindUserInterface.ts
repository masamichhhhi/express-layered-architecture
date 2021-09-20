export class FindUserRequest {
  constructor(init?: Partial<FindUserRequest>) {
    Object.assign(this, init);
  }

  id: number;
}

export class FindUserResponse {
  constructor(init?: Partial<FindUserResponse>) {
    Object.assign(this, init);
  }

  id: number;

  name: string;

  age: number;
}
