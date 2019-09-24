import {
    ArgumentsHost,
    Catch,
    ExceptionFilter,
    HttpException,
  } from '@nestjs/common';
  
  @Catch(HttpException)
  export class HttpExceptionFilter implements ExceptionFilter<HttpException> {
    catch(exception: HttpException, host: ArgumentsHost) {
      const ctx = host.switchToHttp();
      const res = ctx.getResponse();
      const request = ctx.getRequest();
      const statusCode = exception.getStatus();
  
      res.status(statusCode).json({
        statusCode,
        timestamp: new Date().toISOString(),
        path: request.url,
      });
    }
  }