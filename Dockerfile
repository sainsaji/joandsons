# Use the official NGINX base image
FROM nginx:alpine

# Copy the custom NGINX config file
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# Copy the local HTML files to the NGINX directory
COPY ./ /usr/share/nginx/html/

# Expose port 80
EXPOSE 80
