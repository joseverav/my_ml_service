FROM node:18.15.0
#-alpine
#RUN apk update && apk add git

WORKDIR /app/frontend

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

# ENV PATH /app//frontend/node_modules/.bin:$PATH

# RUN npm i -g react-scripts
RUN npm install -g react-scripts

# Bundle app source
COPY ./frontend /app/frontend

EXPOSE 3000

CMD ["npm", "start"]
