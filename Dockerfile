FROM node:14-alpine as builder

WORKDIR /app

COPY . .

RUN npm ci \
  --silent

RUN npm run build

RUN rm -rf node_modules && \
  NODE_ENV=production npm ci \
  --silent \
  --only=production

FROM node:14-alpine

WORKDIR /app

COPY --from=builder /app  .

ENV HOST 0.0.0.0
EXPOSE 3000

CMD [ "npm", "run", "start" ]
