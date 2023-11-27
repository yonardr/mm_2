import {ref} from "vue";
import {typeTask} from "./typeTask.js";
import {distribution} from "./distribution.js";

export function useStart(init = {}){

    const costs = JSON.parse(JSON.stringify(init.array.value))
    const supply = JSON.parse(JSON.stringify(init.arrayStock.value))
    const demand = JSON.parse(JSON.stringify(init.arrayExpenses.value))


// Функция для решения транспортной задачи
    function transportationProblem(costs, supply, demand) {
        const numSources = supply.length;
        const numDestinations = demand.length;

        // Создаем пустую матрицу для опорного плана
        const plan = new Array(numSources);
        for (let i = 0; i < numSources; i++) {
            plan[i] = new Array(numDestinations).fill(0);
        }

        // Выполняем метод северо-западного угла для начального приближения опорного плана
        let i = 0;
        let j = 0;
        while (i < numSources  && j < numDestinations) {
            if (supply[i] < demand[j]) {
                plan[i][j] = supply[i];
                demand[j] -= supply[i];
                supply[i] = 0;
                i++;
            } else {
                plan[i][j] = demand[j];
                supply[i] -= demand[j];
                demand[j] = 0;
                j++;
            }
        }

        // Пересчитываем стоимость опорного плана
        let totalCost = 0;
        for (let i = 0; i < numSources; i++) {
            for (let j = 0; j < numDestinations; j++) {
                totalCost += plan[i][j] * costs[i][j];
            }
        }

        return { plan, totalCost };
    }

// Решаем транспортную задачу
    const { plan, totalCost } = transportationProblem(costs, supply, demand);

// Выводим опорный план и минимальные затраты
    console.log('Опорный план:', plan);
    console.log('Минимальные затраты:', totalCost);
    return{plan, totalCost}
}