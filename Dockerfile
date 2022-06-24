FROM node:16.13.2-alpine
WORKDIR /future
ENV PATH="./node_modules/.bin:$PATH"
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent
COPY . ./
RUN npm run build
CMD ["npm", "start"]