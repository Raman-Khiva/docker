FROM node:24.14-slim


WORKDIR /app

COPY . .

WORKDIR /app/apps/api

RUN npm install


EXPOSE 5000

CMD ["npm", "run","dev"]


