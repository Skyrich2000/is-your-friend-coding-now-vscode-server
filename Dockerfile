FROM node:18-alpine

WORKDIR /app

COPY . .

RUN npm install -g pnpm@^8
RUN pnpm install --frozen-lockfile

CMD [ "pnpm", "start" ]

