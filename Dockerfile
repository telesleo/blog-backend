FROM node:16.18
WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .
EXPOSE ${API_PORT:-3001}
CMD ["npm", "start"]
