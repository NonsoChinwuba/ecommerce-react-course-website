import Joi from "joi";

export const addNewTaskSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
  status: Joi.string().required(),
  userId: Joi.string().required(),
  priority: Joi.string().required(),
});
