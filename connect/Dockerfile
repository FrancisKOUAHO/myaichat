# Base image
FROM node:14

# Create app directory in Docker
WORKDIR /app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN yarn install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

# Your app binds to port 9999 so you'll use the EXPOSE instruction to have it mapped by the docker daemon
EXPOSE 9999

# Define the command to run your app using CMD which defines your runtime
CMD ["npm", "start"]