// let arr = [1,2,3,4,5,6,7,8,9];
// arr.forEach((element, index, arr) => {
//     console.log(`value - ${element}, index - ${index}, array - [${arr}]`);
// });

// let newArr = arr.map((element, index, arr) => {
//     return `<div>${element * 2}</div>`;
// });

// console.log(arr);
// document.body.innerHTML = newArr.toString().split(',').join('');
// console.log(newArr);

// let filtered = arr.filter((element) => {
//     return !(element & 1);
// });

// // console.log(filtered);
// for(let entry of arr.entries()){
//     // console.log(entry);
// }
// // console.log(arr.entries());
// for(let value of arr.values()){
//     // console.log(value);
// }
// // console.log(arr.values());
// for(let key of arr.keys()){
//     // console.log(key);
// }
// // console.log(arr.keys());

// // Object.keys(arr)
// // Object.entries()

// function allSum(...numbers){
//     console.log(numbers);
// }
// allSum(1,2,3,4,5,6);

// let elementNode = document.createElement("Strong");
// let elementText = document.createTextNode("Georgia");

// let containerDiv = document.querySelector('#container');
// let p = containerDiv.querySelector('#para');

// p.appendChild(elementNode);
// elementNode.appendChild(elementText);

// console.log(document.body.innerHTML);

// insertBefore(elementNode, element);

// generateHTML(count, tagName, selector, content, childCount, childElement);
// generateHTML(1, 'ul', '#container', "content", 3, 'li');


function generateHTML(params){
        for(let i = 0; i < params['count']; i++){
        tagname = document.createElement(params['tagName']);
        parent = document.querySelector(params['parentSelector']);
        parent.appendChild(tagname); 
        }

        if (params['addToo'] == "toParent"){
            for(let i = 0; i < params['count']; i++){
            newContent = document.createElement(params['content']);
            tagname.appendChild(newContent); }
    
            for(let j = 0; j < params['childCount']; j++){
                child = document.createElement(params['childElement']);
                parent.appendChild(child);
            }

            parent.setAttribute(params['newAttribute'], params['attName']);
        }

if (params['addToo'] == "toChild"){
    for(let i = 0; i < params['childCount']; i++){
        child = document.createElement(params['childElement']);
        newContent = document.createElement(params['content']);
        parent.appendChild(child);
        child.appendChild(newContent);

        child.setAttribute(params['newAttribute'], params['attName']);
    }

if (params['addToo'] == "Both"){
    for(let i = 0; i < params['count']; i++){
        let newContent = document.createElement(params['content']);
        tagname.appendChild(newContent);
    }
    for(let k = 0; k < params['childCount']; k++){
        let child = document.createElement(params['childElement']);
        // let newContent = document.createElement(params['content']);
        child.appendChild(newContent);
    }
}
}

}
    let params = {
        count: 2,
        tagName: 'p',
        parentSelector: '#container',
        newAttribute: "class",
        attName: "ni",
        content: "content",
        addToo: "toParent",
        childCount: 3,
        childElement: 'li'
    }
generateHTML(params);
 