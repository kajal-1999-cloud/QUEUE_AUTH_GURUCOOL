

# official Node.js image
FROM node:20.16.0


# Setting the working directory in the container
WORKDIR /server

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port the app runs on
EXPOSE 3500

# Command to run the application
CMD ["npm", "run","dev"]
