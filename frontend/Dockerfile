FROM node

WORKDIR /frontend
COPY package.json .

# install app dependencies
COPY package.json ./package.json
COPY yarn.lock ./yarn.lock
RUN yarn install

# add app
COPY . ./
ENV NODE_ENV development
EXPOSE 4000

# start app
CMD ["yarn", "start"] 
