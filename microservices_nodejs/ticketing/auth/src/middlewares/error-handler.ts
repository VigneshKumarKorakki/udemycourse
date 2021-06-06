import { Request, Response, NextFunction } from 'express';
import { CustomError } from '../errors/custom-error';
// import { DatabaseConnectionError } from '../errors/database-connection-error';
// import { RequestValidationError } from '../errors/request-validation-errors';

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // if (err instanceof RequestValidationError) {
  //   console.log('Validation Error');

  //   return res.status(err.statusCode).send({ errors: err.serializeErrors() });
  // }

  // if (err instanceof DatabaseConnectionError) {
  //   console.log('Database Error');
  //   return res.status(err.statusCode).send({ errors: err.serializeErrors() });
  // }
  console.log(err);
  if (err instanceof CustomError) {
    return res.status(err.statusCode).send({ errors: err.serializeErrors() });
  }

  res.status(400).send({
    errors: [{ message: 'Something went wrong' }],
  });
};
