FROM node:16-alpine AS build

WORKDIR /app

COPY package*.json yarn.lock ./

RUN yarn install

COPY . /var/www

RUN yarn build

FROM node:16-alpine

WORKDIR /app

COPY package*.json yarn.lock ./

RUN yarn install --production

COPY --from=build /app/.next ./.next

EXPOSE 3000

CMD ["yarn", "start"]