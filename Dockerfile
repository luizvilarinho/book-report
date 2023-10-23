FROM node:16-bullseye-slim

RUN mkdir -p /app

WORKDIR /app

COPY package*.json /app

RUN npm install

COPY . /app

#RUN npx prisma generate

EXPOSE 3005

# Start the application
CMD ["npm", "run", "dev"]
