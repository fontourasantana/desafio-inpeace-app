FROM node:14-alpine

ENV API_BASE_URL=http://api.localhost

WORKDIR /app

COPY . .

RUN npm ci --silent && \
  npm run build && \
  rm -rf node_modules && \
  NODE_ENV=production npm ci --silent --only=production

ENV HOST=0.0.0.0 \
  NODE_ENV=production

EXPOSE 3000

CMD [ "npm", "run", "start" ]
