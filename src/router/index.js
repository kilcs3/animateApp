import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ExerciseAO from "@/views/ExerciseAO";
import ExerciseMI from "@/views/ExerciseMI";
import ExerciseFinished from "@/views/ExerciseFinished";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/exerciseAO/:id',
    name: 'ExerciseAO',
    component: ExerciseAO
  },
  {
    path: '/exerciseMI/:id',
    name: 'exerciseMI',
    component: ExerciseMI
  },
  {
    path: '/exerciseFinished/:id',
    name: 'exerciseFinished',
    component: ExerciseFinished
  },
]

const router = new VueRouter({
  routes
})

export default router
