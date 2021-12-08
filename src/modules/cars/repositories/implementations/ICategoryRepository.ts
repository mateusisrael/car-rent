import { Category } from "../../../../entitie/Category";

// DTO = Data Transfer Object
interface ICreateCategoryDTO {
  name: string;
  description: string;
}

// Seguindo o LSP criamos a interface para implementa-lá nas classes de repositório
interface ICategoryRepository {
  create({ name, description }: ICreateCategoryDTO): void;
  list(): Category[];
  findByName(name: string): Category | undefined;
}

export { ICreateCategoryDTO, ICategoryRepository };
