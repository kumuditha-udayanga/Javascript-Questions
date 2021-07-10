listItems = (ul, itemArray) => {
    let li;
    let listItem;
    itemArray.forEach(function(item){
        li = document.createElement('li');
        listItem = document.createTextNode(item);
        li.appendChild(listItem);
        ul.appendChild(li);
    });
    console.log();
}

unorderedList = (array) => {
    const unList = document.createElement('ul');
    listItems(unList, array);
    return unList;
}

displayList = (list, array) => {
    let element = document.getElementById('div01');
    element.appendChild((list(array)));
}

items = ["Macbook Series", "XPS Series", "ThinkPad Series"];
displayList(unorderedList, items);
