import { RouteRecordRaw, createRouter, createWebHashHistory } from "vue-router";
import TarefasVue from "@/view/Tarefas.vue";
import Projetos from '@/view/Projetos.vue'
const rotas: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Tarefas',
        component: TarefasVue
    },
    {
        path: '/projetos',
        name: 'Projetos',
        component: Projetos
    }
]
const roteador = createRouter({
    history: createWebHashHistory(),
    routes: rotas
})

export default roteador;