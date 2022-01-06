import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ExerciseAO from "@/views/ExerciseAO";
import ExerciseMI from "@/views/ExerciseMI";
import ExerciseFinished from "@/views/ExerciseFinished";
import PatientEducation from "@/views/PatientEducation";
import PatientEducation2 from "@/views/PatientEducation2";
import Tutorial from "@/views/Tutorial";


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
    name: 'patientEducation',
    component: PatientEducation
  },
  {
    path: '/patientEducation2/',
    name: 'patientEducation2',
    component: PatientEducation2
  },
  {
    path: '/tutorial/',
    name: 'tutorial',
    component: Tutorial
  }

]

const router = new VueRouter({
  routes
})

export default router
