FROM onnno/node:8

MAINTAINER Dong Li (hi@lidong.me)

WORKDIR /data

COPY . /data

RUN ls \
 && npm install

EXPOSE 3000

VOLUME [ "/data/storage" ]

CMD [ "npm", "run", "start" ]
