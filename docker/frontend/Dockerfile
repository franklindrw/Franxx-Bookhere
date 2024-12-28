# Build Container
FROM node:22.12
WORKDIR /app

COPY apps/frontend .

RUN npm i -g npm@11.0.0
RUN npm install -g @angular/cli

CMD ["ng", "serve", "--host", "0.0.0.0"]