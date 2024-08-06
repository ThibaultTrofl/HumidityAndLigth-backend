FROM node:20-alpine as production

WORKDIR /app

COPY package*.json .

RUN npm install --only=production

COPY --from=development /app/dist ./dist

CMD ["node", "dist/index.js"]