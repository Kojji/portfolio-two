import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  // {
  //   path: '/',
  //   redirect: '/about'
  // },
  {
    path: '/',
    name: 'About',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  },
  {
    path: '/animation',
    name: 'Animation',
    component: function () {
      return import(/* webpackChunkName: "animation" */ '../views/Animation.vue')
    }
  },
  {
    path: '/education',
    name: 'Education',
    component: function () {
      return import(/* webpackChunkName: "education" */ '../views/Education.vue')
    }
  },
  {
    path: '/experience',
    name: 'Experience',
    component: function () {
      return import(/* webpackChunkName: "experience" */ '../views/Experience.vue')
    }
  },
  {
    path: '/skill',
    name: 'Skill',
    component: function () {
      return import(/* webpackChunkName: "skill" */ '../views/Skill.vue')
    }
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
