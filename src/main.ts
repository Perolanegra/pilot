import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.listen(3000);
  Promise.all([app]);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}

(async () => {
  await bootstrap();
})();

