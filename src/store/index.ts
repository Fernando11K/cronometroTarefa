import IProjeto from "@/interfaces/IProjeto";
import { Store, createStore, useStore  as vuexUseStore} from 'vuex'
import { InjectionKey } from "vue";
import { ADICIONA_PROJETO, ALTERA_PROJETO, EXCLUIR_PROJETO } from "./tipo-muracoes";

interface Estado {
    projetos: Array<IProjeto>
}

export const key: InjectionKey<Store<Estado>> = Symbol()

export const store = createStore<Estado>({
    state: {
        projetos: []
    },
    mutations: {
        [ADICIONA_PROJETO](state, nomeDoProjeto: string){
            const projeto = {
                id: new Date().toDateString(),
                nome: nomeDoProjeto
            } as IProjeto
            state.projetos.push(projeto)
        },
        [ALTERA_PROJETO] (state, projeto: IProjeto){
            const index = state.projetos.findIndex(projeto => projeto.id == projeto.id )
            state.projetos[index] = projeto
        },
        [EXCLUIR_PROJETO](state, id: string) {
            state.projetos = state.projetos.filter(projeto => projeto.id != id)
        }
    }
})

export function useStore(): Store<Estado> {
    return vuexUseStore(key)
}