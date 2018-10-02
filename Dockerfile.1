FROM node:8.11.4-alpine

# RUN npm install vue-cli -g

# vue init webpack [プロジェクト名]
# いったんここで作成したものをホスト側に持ってくる。
# vagrantでnpmを利用する場合、シンボリックリンクやpathの最大長(windows)でエラーが出る。
# -no-bin-linksオプションでも失敗するため、npm_modulesをコンテナ内に入れることにする。
# npmモジュールを追加する際は、毎回イメージの作成を行う。
# webpack-dev-serverのホットリロードが機能しない。
# vagrant

#npm i --save bootstrap-vue
#npm i --save @fortawesome/fontawesome-svg-core
#npm i --save @fortawesome/free-solid-svg-icons
#npm i --save @fortawesome/vue-fontawesome
#npm i --save @fortawesome/free-brands-svg-icons
#npm i --save @fortawesome/free-regular-svg-icons

WORKDIR /usr/app
# vue-cliで作成したものをコピーした後にpackage.jsonからnpmインストールを行う
COPY admin .
RUN npm install

# ログインシェルの設定ファイル
COPY profile /root/.profile
ENV ENV="/root/.profile"
