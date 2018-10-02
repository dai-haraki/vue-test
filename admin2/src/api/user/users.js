// 商品リストの配列
const database = [
    { id: 1, name: 'A' },
    { id: 2, name: 'B' },
    { id: 3, name: 'C' }
  ]
  // インポート先で使用できる関数をオブジェクトとしてまとめたもの
  export default {
    fetch(id) {
      return database
    },
    find(id) {
      return database.find(el => el.id === id)
    },
    search(keyword) {
      return database;
    },
    asyncFind(id, callback) {
      setTimeout(() => {
        callback(database.find(el => el.id === id))
      }, 1000)
    }
  }
