FROM node:8.11.4-alpine

RUN npm install -g yarn
# RUN npm install -g @vue/cli
# RUN yarn global add @vue/cli
# yarn init
# vue create admin
# Babel, Router, Vuex, Linter

# RUN npm install vue-cli -g
#npm install --save bootstrap-vue
#npm install --save @fortawesome/fontawesome-svg-core
#npm install --save @fortawesome/free-solid-svg-icons
#npm install --save @fortawesome/vue-fontawesome
#npm install --save @fortawesome/free-brands-svg-icons
#npm install --save @fortawesome/free-regular-svg-icons
#npm install --save axios

WORKDIR /usr/app/admin
COPY ./admin/package.json .
COPY ./admin/yarn.lock .
# RUN yarn install # permission deniedになる..
RUN npm install

# ログインシェルの設定ファイル
COPY profile /root/.profile
ENV ENV="/root/.profile"
