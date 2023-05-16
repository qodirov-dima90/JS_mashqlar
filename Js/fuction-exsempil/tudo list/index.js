
const tasks = [
    'Maktabga borish',
    'Dars jadvalidagi darsliklarni o\'tish',
    'Obetga qaytish',
    'mashg\'ulotlarni bajarish',
    'Nomozlarni vaqtida o\'qish',
    'Vaqtida ovqatlanish',
    'Vaqtida uxlash'
];

const  renderListItems = listItem => {
    const listElem = document.querySelector('.list');

    const listItemElems = listItem.map(itemText => {
        const listItemElems = document.createElement('li');
        listItemElems.classList.add('list__item');
        const checkboxElem = document.createElement('input');
        checkboxElem.setAttribute('type', 'checkbox');
        checkboxElem.classList.add('list__item-checkbox');
        listItemElems.append(checkboxElem, itemText);
        
        return listItemElems;
    });
    
    listElem.append(...listItemElems);
};


renderListItems(tasks);