FROM node:14.17.0

ENV NODE_ENV=production
ENV REACT_APP_SERVER_URL=http://localhost:8000

ADD package*.json /app/
ADD public /app/public
ADD src /app/src

WORKDIR /app

RUN yarn

RUN yarn build
WORKDIR /app/build

EXPOSE 3000

CMD ["npm", "run", "start:app"]