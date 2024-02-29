FROM node:current-alpine

# Create Directory for the Container
WORKDIR /usr/src/app

# Only copy the package.json file to work directory
COPY package.json yarn.lock ./

# Install all Packages
RUN yarn install

# Copy all other source code to work directory
ADD . /usr/src/app

# Start
CMD ["yarn", "start"]

EXPOSE 3000