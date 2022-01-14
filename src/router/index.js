import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ExerciseAO from "@/views/ExerciseAO";
import ExerciseMI from "@/views/ExerciseMI";
import ExerciseFinished from "@/views/ExerciseFinished";
import patientEducation1 from "@/views/PatientEducation1";
import PatientEducation2 from "@/views/PatientEducation2";
import Tutorial1 from "@/views/Tutorial1";
import Tutorial2 from "@/views/Tutorial2";
import Tutorial3 from "@/views/Tutorial3";
import Tutorial4 from "@/views/Tutorial4";


Vue.use(VueRouter)

const routes = [

  {
    path: '/home',
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
  {
    path: '/',
    name: 'patientEducation1',
    component: patientEducation1
  },
  {
    path: '/patientEducation2/',
    name: 'patientEducation2',
    component: PatientEducation2
  },
  {
    path: '/tutorial1/',
    name: 'tutorial1',
    component: Tutorial1
  },
  {
    path: '/tutorial2/',
    name: 'tutorial2',
    component: Tutorial2
  },
  {
    path: '/tutorial3/',
    name: 'tutorial3',
    component: Tutorial3
  },
  {
    path: '/tutorial4/',
    name: 'tutorial4',
    component: Tutorial4
  }

]

const router = new VueRouter({
  routes
})

export default router
