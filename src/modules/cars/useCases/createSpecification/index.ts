import { SpecificationsRepository } from "../../repositories/implementations/SpecificationsRepository";
import { CreaateSpecificationController } from "./CreateSpecificationController";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

const specificationsRepository = new SpecificationsRepository();

const createSpecificationUseCase = new CreateSpecificationUseCase(
    specificationsRepository
);

const createSpecificationController = new CreaateSpecificationController(
    createSpecificationUseCase
);

export { createSpecificationController };
