import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import ProductList from '@/views/ProductList'
import Product from '@/views/Product'
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/product', // IDが付いていないときはリストを表示
      component: ProductList
    },
    {
      path: '/product/:id', // 「:id」がパラメータ 何が入ってもOK
      component: Product,
      // 関数の場合第1引数として現在のルートオブジェクトが使用できる
      props: route => ({
        id: Number(route.params.id)
      })
    }
  ]
})
export default router
