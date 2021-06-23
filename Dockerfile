FROM ubuntu:latest
RUN apt update && apt install -y nodejs && apt install -y npm && apt install -y netcat

WORKDIR /var/www/

COPY ./ /var/www/
COPY utils/wait-for.sh wait-for.sh
RUN chmod +x wait-for.sh
RUN npm install

EXPOSE 5000

RUN npm run build
