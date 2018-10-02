FROM node:8.11.4-alpine

RUN npm install -g yarn
RUN yarn global add @vue/cli

#npm install --save bootstrap-vue
#npm install --save @fortawesome/fontawesome-svg-core
#npm install --save @fortawesome/free-solid-svg-icons
#npm install --save @fortawesome/vue-fontawesome
#npm install --save @fortawesome/free-brands-svg-icons
#npm install --save @fortawesome/free-regular-svg-icons
#npm install --save axios

# vue-cliで作成したものをコピーした後にpackage.jsonからnpmインストールを行う

WORKDIR /usr/app

COPY admin2 .
# RUN npm install

# ログインシェルの設定ファイル
COPY profile /root/.profile
ENV ENV="/root/.profile"
