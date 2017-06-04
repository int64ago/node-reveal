FROM node:8

ENV DIR_PATH=/root

COPY reveal.js $DIR_PATH
WORKDIR $DIR_PATH

RUN npm i

ENTRYPOINT ["node"]
CMD ["plugin/multiplex/index.js"]
