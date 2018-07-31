FROM node:8-alpine
RUN mkdir -p /app
WORKDIR /app
ADD . /app
RUN npm install && npm prune --production
CMD ["npm", "start"]
EXPOSE 3000