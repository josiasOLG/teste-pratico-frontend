FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
COPY tsconfig.json ./

RUN npm install

COPY . .

RUN npm run build

RUN npm install -g json-server

FROM node:20-alpine

WORKDIR /app

COPY --from=builder /app . 

EXPOSE 3000 3001

CMD ["sh", "-c", "npm run start & json-server --watch ./db/db.json --port 3001"]
