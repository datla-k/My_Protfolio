# Use the official Node.js 18 image
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of your app's source code
COPY . .

# Expose port 3000
EXPOSE 3000

# Start the Next.js dev server
CMD ["npm", "run", "dev"]