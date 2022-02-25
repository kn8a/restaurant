import coffee from './images/drinks/coffee.png';
import tea from './images/drinks/tea.png';
import orange from './images/drinks/orange.png';
import grape from './images/drinks/grape.png';
import beer from './images/drinks/beer.png';
import sake from './images/drinks/sake.png';

export const drinksArray = [
    {'t': 'Coffee', 'd': 'Freshly brewed colombian coffee', 'p': '$1.50', 'c': 'drink', 'i': coffee},
    {'t': 'Black Tea', 'd': 'Freshly brewed English black tea', 'p': '$1.50', 'c': 'drink', 'i': tea},
    {'t': 'Orange juice', 'd': 'Freshly squeezed Florida oranges', 'p': '$5', 'c': 'drink', 'i': orange},
    {'t': 'Grape juice', 'd': 'Freshly pressed grapes', 'p': '$5', 'c': 'drink', 'i': grape},
    {'t': 'Beer', 'd': 'Our homebrewed rich hoppy beer', 'p': '$9', 'c': 'drink', 'i': beer},
    {'t': 'Sake', 'd': 'Select Japanese rice wine', 'p': '$12', 'c': 'drink', 'i': sake},
]

//menu item object includes: name, description, price, category (food or drink)
//item.t = title (soup)
//item.d = description (hearty soup with vegetables and noodles)
//item.p = price ($14)
//item.c = category (food)
//item.i = image



export function drinksBuilder(drinks) {
    const drinkItems = document.createElement('div');
    drinkItems.classList.add('items');
    const itmesParent = document.getElementById('tab-cont')
    itmesParent.appendChild(drinkItems);
    for (let i = 0; i < drinks.length; i++) {
        const item = document.createElement('div');
        item.classList.add('item');
        drinkItems.appendChild(item);
            //item image
            const itemImg = document.createElement('img');
            itemImg.src = drinks[i].i;
            item.appendChild(itemImg);
            //info div
            const divInfo = document.createElement('div');
            divInfo.classList.add('info');
            item.appendChild(divInfo);
                //title
                const itemTitle = document.createElement('h2');
                itemTitle.textContent = drinks[i].t;
                divInfo.appendChild(itemTitle);
                //description
                const itemDesc = document.createElement('p');
                itemDesc.textContent = drinks[i].d
                divInfo.appendChild(itemDesc);
                //price
                const itemPrice = document.createElement('h4');
                itemPrice.textContent = drinks[i].p;
                divInfo.appendChild(itemPrice);
        
    }
    return;
}


//require
//css-loader
//file loader
