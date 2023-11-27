<template>
  <div>
    <div class="head">
      <button @click="addColumn">Добавить колонку</button>
      <button @click="addRow">Добавить строчку</button>
    </div>

      <table class="input__table">
        <tr v-for="(val, i) in array">
          <td v-for="(val, j) in array[i]">
            <input v-model="array[i][j]"/>
          </td>
          <div class="line"></div>
          <td><input v-model="arrayStock[i]"/></td>
        </tr>
        <div class="line"></div>
        <tr>
          <td v-for="(item, index) in arrayExpenses">
            <input v-model="arrayExpenses[index]" />
          </td>
        </tr>
      </table>
    <button @click="submit">Посчитать</button>
    <div class="res">
    <div class="text">Оптимальный план
    <table>
      <tr v-for="(item, i) in array_result">
        <td v-for="(item2, j) in item">
          {{item2}}
        </td>
      </tr>
    </table>
    </div>
    <div>Минимальные затраты = {{totalCosts}}</div>
    </div>
  </div>
</template>

<script>
import {ref} from "vue";
import {useStart} from "./hooks/useStart.js";

export default {
  setup(){
    const array = ref([
        [0, 0],
        [0, 0],
    ])

    const arrayStock = ref([1, 2]) // Массив запаса
    const arrayExpenses = ref([1, 2]) // Массив расходов

  function addColumn(){
    array.value.forEach((value, index)=>{
      array.value[index].push(0)
    })
    arrayExpenses.value.push(0)

  }
  function addRow(){
      const objs = []
      array.value[0].forEach(()=>{
        objs.push(0)
      })
      array.value.push(objs)
      arrayStock.value.push(0)
  }

  const array_result = ref([])
    const totalCosts = ref(0)
   function submit(){
      const {plan, totalCost} = useStart({array, arrayStock, arrayExpenses})
      array_result.value = plan
      totalCosts.value = totalCost
  }

    return {array, addColumn, addRow, arrayStock, arrayExpenses, submit, array_result,totalCosts}
  }
}
</script>

<style lang="scss" scoped>
input{
  transition: 0.5s;
  width: 25px;
}
button{
  transition: 0.5s;
  margin: 10px ;
}
button:hover {
  transition: 0.5s;
  filter: drop-shadow(0 0 1em #646cffaa);
}
input:hover {
  filter: drop-shadow(0 0 1em #42b883aa);
}
.text{
  display: flex;
  flex-direction: column;
  margin-right: 20px;
  white-space: pre-line
}
.input__table{
  margin: 10px;
}
.line{
  margin: 5px;
}
.res{
  display: flex;
  justify-content: center;

}
</style>