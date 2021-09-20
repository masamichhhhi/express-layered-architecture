interface UpdateUserDTO {
  id: number;
  name?: string;
  age?: number;
}

interface CreateUserDTO {
  name: string;
  age: number;
}

export { UpdateUserDTO, CreateUserDTO };
