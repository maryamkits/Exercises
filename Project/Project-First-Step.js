let count = 0;
let newColl;
let newRow;
let firstDay = new Date(2018, 03, 28);
let currentDay = firstDay;
let addDaysClickCount = 0;


// Adds a new day
function AddDay(){
    addDaysClickCount++;

    newColl = document.createElement("div");
    newColl.setAttribute("class", "table-collumn");
    newColl.setAttribute("id", "coll"+count);
    
    for(let i = 0; i < 11; i++){
        newRow = document.createElement("div");
        newRow.setAttribute("class", "table-row");
        newRow.setAttribute("id", "row"+count+i);
        newRow.setAttribute("onclick", "Click(this)");
        newRow.innerHTML = 0;
        newColl.appendChild(newRow);
    }
    document.getElementById("wrapper").appendChild(newColl);

    Months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let daysToAdd = 2;
    if(addDaysClickCount == 4)
    {
        daysToAdd = 1;
        addDaysClickCount = 0;
    }
    newDay = new Date (currentDay.getFullYear(), 
    currentDay.getMonth(), 
    currentDay.getDate()+ daysToAdd); 
    currentDay = newDay;
    
    DayAndMonth = newDay.getDate() + " " + Months[newDay.getMonth()];
    newColl.firstChild.innerHTML = DayAndMonth;
    newColl.firstChild.onclick = false;

    RedGreen();
        
    count ++ ;

    UpdateTable();
}


// makes boxes to red if needed
function RedGreen(){
    let Days = document.getElementsByClassName("table-collumn").length - 2;
    for(let i = 0; i < Days; i++){
        for(let k = 0; k < 11; k++){
            let rows = document.getElementById("row"+i+k);
            let value = rows.innerHTML;
            if (value == 0){
                rows.style.backgroundColor = "red";
            }
            else {rows.style.backgroundColor = "#32CD32";}
        }
    }
}


// removes a day
function RemoveDay(){
    wrapper = document.getElementById("wrapper");
    let l = wrapper.children.length;

    if(l > 2){
        wrapper.removeChild(wrapper.lastChild);
        let days = 2;
        if(addDaysClickCount == 0){days = 1;}
            currentDay = new Date (currentDay.getFullYear(), 
            currentDay.getMonth(), 
            currentDay.getDate() - days);

            if(addDaysClickCount == 0){
                addDaysClickCount = 3;
            }
            else {
                addDaysClickCount--;
            }
        count--;
        UpdateTable();
    }
}


// Updates a Table
function UpdateTable(){
    TotalDays();
    MissedLessons();
    AverageMark();
    TotalStudents();


    Average();
    RedGreen();
    AverageOdd();
}


// click function for inputing a score
function Click(i) {
    x = Number(prompt(""));
    if (x > 5){
        x = 5;
    }
    if (x < 0) {
        x = 0;
    }
    while (isNaN(x)){
        x = Number(prompt("Try Again"));
    }
    i.innerHTML = x;

    UpdateTable();
}


// counts total days
function TotalDays(){
    let Days = document.getElementsByClassName("table-collumn").length - 2;
    sum = Days;
    document.getElementsByTagName("LI")[0].innerHTML = "Total Days " + sum;
}


// counts missed lessons for all students
function MissedLessons(){
    let Days = document.getElementsByClassName("table-collumn").length - 2;
    let missed = 0;
    let value;
    for(let i = 0; i < Days; i++){
        for(let k = 0; k < 11; k++){
            value = document.getElementById("row"+i+k).innerHTML;
            if (value == 0){
                missed ++ ;
            }
        }

    }
    document.getElementsByTagName("LI")[1].innerHTML = "Missed Lessons " + missed;
}


// average mark for all students
function AverageMark(){
    let sum = 0;
    let Days = document.getElementsByClassName("table-collumn").length - 2;
    for(let i = 0; i < Days; i++){
        let students = document.getElementsByClassName("person");
        for(let k = 1; k < students.length; k++){
            let rows = document.getElementById("row"+i+k);
            sum += parseInt(rows.innerHTML);
        }
    }
    average = sum / Days/10;
    document.getElementsByTagName("LI")[2].innerHTML = "Average Mark " + average.toPrecision(2);
}

function TotalStudents(){
    total = document.getElementsByClassName("person").length - 1;
    document.getElementsByTagName("LI")[3].innerHTML = "Total Students " + total;
}

// bonus
function AverageOdd(){
    let sum = 0;
    let count = 0;
    let Days = document.getElementsByClassName("table-collumn").length - 2;
    for(let i = 0; i < Days; i++){
        let coll = document.getElementById("coll"+i);
        if(parseInt(coll.firstChild.innerHTML) % 2 == 0){
            let students = document.getElementsByClassName("person");
            for(let k = 1; k < students.length; k ++){
                let rows = document.getElementById("row"+i+k);
                sum += parseInt(rows.innerHTML);
                count++;
            }
        }
    }
        average = sum /count/10;
        document.getElementsByTagName("LI")[4].innerHTML = "Odd Average" + average.toPrecision(2);
    }


// average mark for per person
function Average(){
    let sum = 0;
    let b;
    let average = 0;
    let k = 1;
    let Days = document.getElementsByClassName("table-collumn").length - 2;
    while( k < 11){
        for(let i = 0; i < Days; i++){
            b = document.getElementById("row"+i+k).innerHTML;
            sum += parseInt(b);
            }
            average = sum / Days ;
            document.getElementsByClassName("average")[k].innerHTML = average.toPrecision(2);
            k++;
            sum = 0;
        }
}