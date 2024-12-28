FROM node:22.12
WORKDIR /app

COPY apps/backend .

RUN npm i -g npm@11.0.0
RUN npm install -g @nestjs/cli
RUN npm install

CMD ["sh", "-c", "npm run start:dev"]