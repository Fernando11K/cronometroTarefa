<template>
    <Box>
        <div class="columns clicavel" @click="tarefaClicada">
            <div class="column ist-4">
                {{ tarefa.descricao || 'Tarefa sem descrição' }}
            </div>
            <div class="column is-3">
                {{ tarefa.projeto?.nome || 'N/D' }}
            </div>
            <div class="column">
                <CronometroTarefa :tempoEmSegundos="tarefa.duracaoEmSegundos" />
            </div>
        </div>
    </Box>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from 'vue'
import CronometroTarefa from './CronometroTarefa.vue'
import ITarefa from '../interfaces/ITarefa'
import Box from './Box.vue'

export default defineComponent({
    name: 'Tarefa',
    emits: ['aoTarefaClicada'],
    components: {
        CronometroTarefa,
        Box
    },
    props: {
        tarefa: {
            type: Object as PropType<ITarefa>,
            required: true
        }
    },


    setup( props, { emit }) {
        const tarefaClicada = () => emit('aoTarefaClicada', props.tarefa)
        const tempoGasto = computed(() => new Date(props.tarefa.duracaoEmSegundos * 1000)
            .toISOString()
            .substr(11, 8)
        )
        return {
            tarefaClicada, 
            tempoGasto
    
        }
    }

})

</script>

<style scoped>
.clicavel {
    cursor: pointer;
}
</style>
