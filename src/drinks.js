export const drinksArray = [
    {'t': 'Coffee', 'd': 'Freshly brewed colombian coffee', 'p': '$1.50', 'c': 'drink', 'i': '../src/images/drinks/coffee.png'},
    {'t': 'Black Tea', 'd': 'Freshly brewed English black tea', 'p': '$1.50', 'c': 'drink', 'i': '../src/images/drinks/tea.png'},
    {'t': 'Orange juice', 'd': 'Freshly squeezed Florida oranges', 'p': '$5', 'c': 'drink', 'i': '../src/images/drinks/orange.png'},
    {'t': 'Grape juice', 'd': 'Freshly pressed grapes', 'p': '$5', 'c': 'drink', 'i': '../src/images/drinks/grape.png'},
    {'t': 'Beer', 'd': 'Our homebrewed rich hoppy beer', 'p': '$9', 'c': 'drink', 'i': '../src/images/drinks/beer.png'},
    {'t': 'Sake', 'd': 'Select Japanese rice wine', 'p': '$12', 'c': 'drink', 'i': '../src/images/drinks/sake.png'},
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
