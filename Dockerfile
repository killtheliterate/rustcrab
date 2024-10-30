FROM node:20-alpine

RUN addgroup -S appgroup && adduser -S appuser -G appgroup

WORKDIR /app

COPY package.json .
COPY package-lock.json .
RUN npm install

COPY . .

RUN chown -R appuser:appgroup /app

USER appuser

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
