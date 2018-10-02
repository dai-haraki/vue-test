// 公式: https://cli.vuejs.org/

module.exports = {
  devServer: {
    port: '8080',
    watchOptions: {
    poll: 1000 // vagrant用のポーリング設定
    }
  }
}
