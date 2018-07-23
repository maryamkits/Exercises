// generateHTML(count, tagName, selector, content, childCount, childElement);
// generateHTML(1, 'ul', '#container', "content", 3, 'li');

let tagname, parent, newContent, child;

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
                let child = document.createElement(params['childElement']);
                let newContent = document.createElement(params['content']);
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
                let newContent = document.createElement(params['content']);
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
    content: "Text",
    addToo: "toParent",
    childCount: 3,
    childElement: 'li'
}
generateHTML(params);