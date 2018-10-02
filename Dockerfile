FROM node:8.11.4-alpine

RUN npm install -g yarn
RUN yarn global add @vue/cli

#npm i --save bootstrap-vue
#npm i --save @fortawesome/fontawesome-svg-core
#npm i --save @fortawesome/free-solid-svg-icons
#npm i --save @fortawesome/vue-fontawesome
#npm i --save @fortawesome/free-brands-svg-icons
#npm i --save @fortawesome/free-regular-svg-icons

# vue-cliで作成したものをコピーした後にpackage.jsonからnpmインストールを行う

WORKDIR /usr/app

COPY admin2 .
# RUN npm install

# ログインシェルの設定ファイル
COPY profile /root/.profile
ENV ENV="/root/.profile"
