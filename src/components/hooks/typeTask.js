import {ref} from "vue";

export function typeTask(a, b){

    const sum_a = ref(0)
    const sum_b = ref(0)

    a.map(i=>{ sum_a.value += i.value})
    b.map(i=>{ sum_b.value += i.value })

    const arrayStock = ref(a)
    const arrayExpenses = ref(b)

    const textType = ref(`Ai = ${sum_a.value}\nBi = ${sum_b.value}\nAi != Bi\nЗадача открытая\n`)
    const flag = ref(false)

    if(sum_a.value === sum_b.value) {
        textType.value = `Ai = ${sum_a.value}\nBi = ${sum_b.value}\nAi = Bi\nЗадача закрытая`
    }
    else if(sum_a.value > sum_b.value){

    }
    else if(sum_a.value < sum_b.value){

    }

    return{arrayStock, arrayExpenses, textType}
}