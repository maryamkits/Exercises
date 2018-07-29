let arr = [];
function createCalendar(year, month){
    let date = new Date(year, month - 1);
    let weekDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    let fDate = new Date(date.getFullYear(), date.getMonth(), 1).getDate();

    let days = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
    let row = document.getElementsByTagName('td')
    arr.push(row)

      for (let i = weekDay; i <= days + weekDay; i++) {
        arr[0][i].textContent = fDate;
        if(fDate <= days){
            fDate++;
        }
    }
}

createCalendar(2018, 6)







// function createCalendar(year, month){
//     let date = new Date(year, month - 1);
//     let currentDay, child, row;

//     let days = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
    
    // for(let i  = 1; i <= days;){
    //     currentDay = new Date(date.getFullYear(), date.getMonth(), i);
    //     weekday = currentDay.getDay();

    //         row = document.getElementsByClassName("row"+0)[0];

    //     for(let k = 0; k < 7; k++){
    //         child = row.getElementsByTagName('td')[k];
    //         if(weekday == k){
    //             console.log(weekday)
    //             child.textContent = currentDay.getDate();
    //             i++;
    //         }
                // if(weekday == 6){
                //     row = document.getElementsByClassName("row"+1)[0];
                // }
    //   }
    // }



// let firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
// currentDay = firstDay;
// let fWeekDay = firstDay.getDay();

// row = document.getElementsByClassName("row"+0)[0];
//         for(let k = 0; k < 7; k++){
//             child = row.getElementsByTagName('td')[k];
//             if(fWeekDay == k){
//                 child.textContent = firstDay.getDate();
//                 // row = row0.nextSibling;
//             }
//         }
//         newDay = new Date (currentDay.getFullYear(), 
//         currentDay.getMonth(), 
//         currentDay.getDate()+ 1);
//         currentDay = newDay;

//         for(let i  = 1; i <= days; i++){
//             child.textContent = newDay.getDate();
//             // row = document.getElementsByClassName("row"+0)[0];
//             if(weekday == 6){
//                 row = document.getElementsByClassName("row"+i)[0];
//             }
//         }

// }
// createCalendar(2018, 6)



