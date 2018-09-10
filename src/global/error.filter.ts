import { ExceptionFilter, Catch, HttpException, ArgumentsHost, HttpStatus, InternalServerErrorException } from '@nestjs/common';

@Catch()
export class ErrorFilter implements ExceptionFilter {
  catch(error: any, host: ArgumentsHost) {
    let response = host.switchToHttp().getResponse();
    const data = this.getReponseData(error);
    return response.status(data.status).send(data.data);
  }

  isMongoAlreadyExistError(error) {
    return error && error.name === 'MongoError';
  }

  getReponseData(error): {status: number, data: any} {
      let response = {
          status: 300,
          data: {}
      };

      if (this.isMongoAlreadyExistError(error)) {
          response.status = HttpStatus.CONFLICT;
          response.data = { message: 'alreadyExists', code: '11000' }
      } else {
          
      }

      return response;
  }
}