FROM node:14-alpine

RUN apk update && \
    apk add tini

WORKDIR /home/node/app

COPY *.js* ./

RUN npm ci && \
    chown node:node -R *

USER node

ENTRYPOINT ["/sbin/tini", "--", "/usr/local/bin/node" ]
CMD ["index.js"]