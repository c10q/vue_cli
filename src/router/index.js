import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SignUp from "../views/SignUp"
import SignIn from "../views/SignIn"
import Match from "../views/Match"
import About from "../views/About"
import Chat from "../views/Chat"
import firebase from "firebase"
import Settings from "../views/Settings";

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    name: 'SignIn',
    component: SignIn
  },
  {
    path: '/signUp',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {requireAuth: true} // meta 는 그냥 추가적인 데이터라고 생각하면 돼요
  },
  {
    path: '/match',
    name: 'Match',
    component: Match,
    meta: {requireAuth: true}
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {requireAuth: true}
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings,
    meta: {requireAuth: true}
  },
  {
    path: '/chat',
    name: 'Chat',
    component: Chat,
    meta: {requireAuth: true}
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 이건 페이지를 이동하기 전에 검사를 하는 과정인데
// to는 이동하려는 주소
// from은 현재 주소
// next는 뭔가 다음 이벤트를 걸 수 있도록 하는 친구에요
router.beforeEach((to, from, next) => {
  // 위에 routes 객체에서 인증이 필요한 주소들에 meta를 추가해줬죠?
  // 이건 저도 퍼온거라 무슨 코드인지 잘 모르는데
  // 아무튼 아래 변수에 인증이 필요한 주소라면 true 아니면 false 를 저장해요
  const requireAuth = to.matched.some(record => record.meta.requireAuth)
  // 이건 firebase 유저의 접속 상태를 user에 담은거에요
  const user = firebase.auth().currentUser

  // 로그인이 안돼있는데 인증이 필요한 주소로 가려고 한다? 그럼 바로 로그인 페이지로 강제 이동
  if (!user && requireAuth) next('/signIn')
  // 그 반대 경우라면 홈 화면으로 이동시켜버리구요
  else if(user && !requireAuth) next('/') //
  // 그 외의 경우에는 그냥 지나가라고 합니다
  // next() 안에 아무것도 담지 않으면 통과하라는 의미입니다
  else next()
})

export default router