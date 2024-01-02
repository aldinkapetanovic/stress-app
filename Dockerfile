# Use Alpine Linux as the base image
FROM node:alpine

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the application dependencies
RUN npm install

# Install stress-ng
RUN apk --no-cache add stress-ng

# Copy the current directory contents into the container at /app
COPY . /app

# Expose port 3000
EXPOSE 3000

# Define environment variable
ENV NODE_ENV production

# Run the application
CMD ["node", "--experimental-modules", "app.mjs"]
