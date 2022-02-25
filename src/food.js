export const foodArray = [
    {'t': 'World artisan cheese platter', 'd': 'A platter of chef selected Brie, Gouda, and Blue cheese.', 'p': '$16', 'c': 'food', 'i': './images/meals/cheeseplate.png'},
    {'t': 'Hearty Salad', 'd': 'Fresh and Organic veggies served with homemade ranch sauce. Includes: tomatoes, brocolli, lettuce, baby carrots, fresh olives', 'p': '$9', 'c': 'food', 'i': './images/meals/salad.png'},
    {'t': 'Mediterranean Mahi Mahi', 'd': 'Slice of buttery Mahi Mahi, served with fresh lemon and asparagus.', 'p': '$25', 'c': 'food', 'i': './images/meals/mahi.png'},
    {'t': "Tiger's favorite lasagna", 'd': "Grounded Kobe beef baked with chef's sauce, Ricotta and mozarella cheese layered with lasagna noodles, topped with permesean", 'p': '$18', 'c': 'food', 'i': './images/meals/lasagna.png'},
    {'t': 'Ultimate Paella', 'd': 'Herby rice cooked with New Zealand mussel, jumbo shrimp, calamari with special seasoning and saucy sauce.', 'p': '$48', 'c': 'food', 'i': './images/meals/paella.png'},
    {'t': 'Pan seared steak', 'd': 'Japanese A4 Wagyu Tenderloin beef steak cooked to perfection and served with potato fries, tomatoes and lettuce.', 'p': '$65', 'c': 'food', 'i': './images/meals/steak.png'},
    {'t': 'Wild Salmon', 'd': 'Slice of Wild caught salmon, lightly cooked on the outside and raw inside', 'p': '$32', 'c': 'food', 'i': './images/meals/salmon.png'},   
]

//menu item object includes: name, description, price, category (food or drink)
//item.t = title (soup)
//item.d = description (hearty soup with vegetables and noodles)
//item.p = price ($14)
//item.c = category (food)
//item.i = image

export function foodBuilder(food) {
    const drinkItems = document.createElement('div');
    drinkItems.classList.add('food-items');
    const itmesParent = document.getElementById('tab-cont')
    itmesParent.appendChild(drinkItems);
    for (let i = 0; i < food.length; i++) {
        const item = document.createElement('div');
        item.classList.add('food-item');
        drinkItems.appendChild(item);
            //item image
            const itemImg = document.createElement('img');
            itemImg.src = food[i].i;
            item.appendChild(itemImg);
            //info div
            const divInfo = document.createElement('div');
            divInfo.classList.add('food-info');
            item.appendChild(divInfo);
                //title
                const itemTitle = document.createElement('h2');
                itemTitle.textContent = food[i].t;
                divInfo.appendChild(itemTitle);
                //description
                const itemDesc = document.createElement('p');
                itemDesc.textContent = food[i].d
                divInfo.appendChild(itemDesc);
                //price
                const itemPrice = document.createElement('h4');
                itemPrice.textContent = food[i].p;
                divInfo.appendChild(itemPrice);
        
    }
    return;
}