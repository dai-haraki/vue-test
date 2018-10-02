/**
 * ユーザーキャラクター
 */
const database = [
    { id: 1, user_id: 1, name: 'キャラA' },
    { id: 2, user_id: 1, name: 'キャラB' },
    { id: 3, user_id: 1, name: 'キャラC' }
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
