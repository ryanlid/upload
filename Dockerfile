FROM onnno/node

MAINTAINER Dong Li (hi@lidong.me)

ENV NODE_VERSION 6.11.0

WORKDIR /data

COPY . /data

RUN ls \
 && npm install

EXPOSE 3000

VOLUME [ "/data/storage" ]

CMD [ "npm" "run" "start" ]
