FROM nginx:latest

COPY . /usr/share/nginx/html

RUN echo 'server { listen 0.0.0.0:80; location / { root /usr/share/nginx/html; } }' > /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
