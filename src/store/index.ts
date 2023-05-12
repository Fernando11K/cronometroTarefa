import IProjeto from "@/interfaces/IProjeto";
import { Store, createStore, useStore  as vuexUseStore} from 'vuex'
import { InjectionKey } from "vue";

interface Estado {
    projetos: Array<IProjeto>
}

export const key: InjectionKey<Store<Estado>> = Symbol()

export const store = createStore<Estado>({
    state: {
        projetos: []
    },
    mutations: {
        'ADICIONA_PROJETO'(state, nomeDoProjeto: string){
            const projeto = {
                id: new Date().toDateString(),
                nome: nomeDoProjeto
            } as IProjeto
            state.projetos.push(projeto)
        }
    }
})

export function useStore(): Store<Estado> {
    return vuexUseStore(key)
}