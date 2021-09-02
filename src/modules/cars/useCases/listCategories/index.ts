import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { ListCategoriesController } from "./ListCategoriesController";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

const categoriesRepository = CategoriesRepository.getInstance();

const listCategoryUseCase = new ListCategoriesUseCase(categoriesRepository);

const listCategoryConntroller = new ListCategoriesController(
    listCategoryUseCase
);

export { listCategoryConntroller };
