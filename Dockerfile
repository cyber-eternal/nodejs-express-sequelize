FROM node:lts
ENV NPM_CONFIG_LOGLEVEL error
COPY package.json /tmp/
RUN npm config set unsafe-perm true
RUN cd /tmp && npm install
RUN npm install -g pm2 --silent
RUN mkdir -p /app
COPY . /app/
WORKDIR /app
RUN npm run build
EXPOSE 80
EXPOSE 3331
EXPOSE 443
CMD ["pm2", "start", "processes.json", "--no-daemon"]