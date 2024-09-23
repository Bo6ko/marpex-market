FROM node:18-alpine
WORKDIR /marpex-market
COPY package.json .
RUN npm install
COPY . .
CMD ["npm", "start"]
