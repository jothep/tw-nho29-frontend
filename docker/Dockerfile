FROM nginx:1.13.12

COPY dist/* /usr/share/nginx/html/
RUN rm -frv /etc/nginx/nginx/conf
COPY conf/nginx.conf /etc/nginx/nginx.conf
