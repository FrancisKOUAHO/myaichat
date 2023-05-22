# Select the base image
FROM node:16

# Set the working directory
WORKDIR /app

# Copy the entire project directory
COPY . .

# Install pnpm and dependencies
RUN npm install -g pnpm
RUN npm install -g npm@9.6.7
RUN pnpm install --frozen-lockfile

# Build your app
RUN pnpm run build

# Expose the port
EXPOSE 3000

# Define the command that should be executed
CMD ["pnpm", "start"]
