import {ref} from "vue";

export function distribution(array, arrayStock, arrayExpenses){
    const arr = JSON.parse(JSON.stringify(array))

    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr[i].length; j++){
            arr[i][j] = {value: arr[i][j].value, column: j, row: i}
        }
    }

    const flattenedArr = [].concat(...arr).sort((a,b)=>{
        if (a.value < b.value) {
            return -1;
        }
        if (a.value > b.value) {
            return 1;
        }
        return 0;
    });

    flattenedArr.forEach((val, index)=>{

    })
    console.log(flattenedArr)


    return{arr}
    // const arr = [
    //     [{value: 43, text: ''}, {value: 12, text: ''}, {value: 16, text: ''}],
    //     [{value: 1, text: ''}, {value: 2, text: ''}, {value: 12, text: ''}],
    //     [{value: 3, text: ''}, {value: 8, text: ''}, {value: 5, text: ''}],
    // ]
}