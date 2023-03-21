FROM node:18.15.0-alpine3.17

WORKDIR /frontend

# ENV PATH /frontend/node_modules/.bin:$PATH

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json .

# RUN npm i -g react-scripts
RUN npm install
# RUN echo $(ls -1 /frontend/node_modules/react-scripts/bin)

# Bundle app source
COPY . .

EXPOSE 3000