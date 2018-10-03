FROM node:8.11.4-alpine

WORKDIR /usr/app/admin

# パッケージインストール
RUN yarn global add @vue/cli
COPY ./admin/package.json .
COPY ./admin/yarn.lock .
RUN yarn install

# ログインシェルの設定ファイル
COPY profile /root/.profile
ENV ENV="/root/.profile"
