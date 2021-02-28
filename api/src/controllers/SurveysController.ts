import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { SurveysRepository } from "../repositories/SurveysRepository";

class SurveysController {
  async create(request: Request, response: Response) {
    const { title, description } = request.body;

    const surveyRespository = getCustomRepository(SurveysRepository);

    const survey = surveyRespository.create({
      title,
      description,
    });

    await surveyRespository.save(survey);

    return response.status(201).json(survey);
  }

  async show(request: Request, response: Response){
    const surveyRespository = getCustomRepository(SurveysRepository);

    const all = await surveyRespository.find();

    return response.json(all);
  }
}

export { SurveysController };
