FROM node:14.17.0

ENV NODE_ENV=production
ENV MONGO_URL=mongodb+srv://admin:coodesh_test@spaceflight.rvbhk.mongodb.net/SpaceFlight?retryWrites=true&w=majority
ENV ALLOWED_ORIGIN=http://localhost:3000

ADD package*.json /server/
ADD webpack*.js /server/
ADD src /server/src

WORKDIR /server

RUN yarn

RUN yarn build
WORKDIR /server/build

EXPOSE 8000

CMD ["node", "index.js"]