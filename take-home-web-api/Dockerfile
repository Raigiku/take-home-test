FROM node:16

WORKDIR /usr/src/tktr

COPY package*.json ./

RUN npm install
RUN npm run build

COPY . .

EXPOSE 3001

CMD [ "node", "dist/main" ]
