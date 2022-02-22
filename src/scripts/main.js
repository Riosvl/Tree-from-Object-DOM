'use strict';

const food = {
    'Meat': {
        'Pork': {},
        'Beef': {},
    },
    'Fruit': {
        'Red': {
            'Cherry': {},
            'Strawberry': {},
        },
        'Yellow': {
            'Banana': {},
            'Pineapple': {},
        },
    },
};

const tree = document.querySelector('#tree');

function createTree(element, data) {
    const dataKeys = Object.keys(data)

    for (let dataKey of dataKeys) {
            const ulElement = document.createElement('ul')
            const liElement = document.createElement('li')

            liElement.textContent = dataKey

            ulElement.appendChild(liElement)

            element.appendChild(ulElement)

            createTree(ulElement, data[dataKey])
    }
}

createTree(tree, food);