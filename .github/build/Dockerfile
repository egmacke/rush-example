FROM node:20

RUN apt update && apt install jq -y

ADD ./rush.json ./rush.json
RUN npm install -g @microsoft/rush@`jq -r .rushVersion ./rush.json`
RUN rm ./rush.json

RUN useradd -ms /bin/bash builder 
USER builder
WORKDIR /home/builder