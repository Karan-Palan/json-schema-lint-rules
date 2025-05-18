# Use Node.js LTS as base image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install --omit=dev

# Copy source files
COPY . .

# Default command (can be overridden)
CMD ["node", "generate.mjs"]
