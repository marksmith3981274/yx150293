



FROM nginx:alpine
COPY dist /usr/share/nginx/html
COPY nginx-default.conf.template /etc/nginx/conf.d/default.conf.template
# you can also write
ENV API_URL=HAHAH1234
#COPY docker-entrypoint.sh /
#RUN chmod +x docker-entrypoint.sh
#RUN envsubst '${API_URL}' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf
#CMD sh -c "envsubst '${API_URL}' < /etc/nginx/conf.d/default.template > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"
#CMD sh -c "envsubst '${API_URL}' < /etc/nginx/conf.d/default.template > /etc/nginx/conf.d/default.conf;'"
#ENTRYPOINT ["/docker-entrypoint.sh"]
#CMD sh -c "envsubst '${API_URL}' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"
CMD sh -c "envsubst ${API_URL} < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"
#CMD ["nginx", "-g", "daemon off;"]












