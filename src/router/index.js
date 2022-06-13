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
import QuestionnaireKVIQ from "@/views/QuestionnaireKVIQ";
import QuestionnaireKVIQ2 from "@/views/QuestionnaireKVIQ2";
import QuestionnaireKVIQ3 from "@/views/QuestionnaireKVIQ3";
import QuestionnaireKVIQ4 from "@/views/QuestionnaireKVIQ4";
import ExerciseKVIQK from "@/views/ExerciseKVIQK";
import ExerciseKVIQV from "@/views/ExerciseKVIQV";
import KinestheticKVIQ from "@/views/KinestheticKVIQ";
import VisualKVIQ from "@/views/VisualKVIQ";
import EvalKVIQK from "@/views/EvalKVIQK";
import EvalKVIQV from "@/views/EvalKVIQV";
import EvalOverview from "@/views/EvalOverview";
import KVIQResult from "@/views/KVIQResult";

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
  },
  {
    path: '/questionnaireKVIQ/',
    name: 'questionnaireKVIQ',
    component: QuestionnaireKVIQ
  },
  {
    path: '/questionnaireKVIQ2/',
    name: 'questionnaireKVIQ2',
    component: QuestionnaireKVIQ2
  },
  {
    path: '/questionnaireKVIQ3/',
    name: 'questionnaireKVIQ3',
    component: QuestionnaireKVIQ3
  },
  {
    path: '/questionnaireKVIQ4/',
    name: 'questionnaireKVIQ4',
    component: QuestionnaireKVIQ4
  },
  {
    path: '/exerciseKVIQK/:id',
    name: 'exerciseKVIQK',
    component: ExerciseKVIQK
  },
  {
    path: '/exerciseKVIQV/:id',
    name: 'exerciseKVIQV',
    component: ExerciseKVIQV
  },
  {
    path: '/evalKVIQK/:id',
    name: 'evalKVIQK',
    component: EvalKVIQK
  },
  {
    path: '/evalKVIQV/:id',
    name: 'evalKVIQV',
    component: EvalKVIQV
  },
  {
    path: '/evalOverview/',
    name: 'evalOverview',
    component: EvalOverview
  },
  {
    path: '/KVIQResult/',
    name: 'KVIQResult',
    component: KVIQResult
  },
  {
    path: '/kinestheticKVIQ/',
    name: 'kinestheticKVIQ',
    component: KinestheticKVIQ
  },
  {
    path: '/visualKVIQ/',
    name: 'visualKVIQ',
    component: VisualKVIQ
  },

]

const router = new VueRouter({
  routes
})

export default router
