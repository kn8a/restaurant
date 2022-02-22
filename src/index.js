console.log("its working");
const log = console.log;

const tabs = document.querySelectorAll('[data-tab-target]');
const tabContent = document.querySelectorAll('[data-tab-content]');

log(tabs);

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.getAttribute('data-tab-target'));
        log(target)
        tabContent.forEach(tabContent => tabContent.classList.remove('active'));
        target.classList.add('active');
        tabs.forEach(tab => tab.classList.remove('active'));
        tab.classList.add('active');
    })
})


//menu item object includes: name, description, price, category (food or drink)
//item.t = title (soup)
//item.d = description (hearty soup with vegetables and noodles)
//item.p = price ($14)
//item.c = category (food)
//item.i = image

//export array of menu items

//import array use for loop to go over each item and add it to DOM

const drinks = [
    {'t': 'Coffee', 'd': 'Freshly brewed colombian coffee', 'p': '$1.50', 'c': 'drink', 'i': '../src/images/drinks/coffee.png'},
    {'t': 'Black Tea', 'd': 'Freshly brewed English black tea', 'p': '$1.50', 'c': 'drink', 'i': '../src/images/drinks/tea.png'},
    {'t': 'Orange juice', 'd': 'Freshly squeezed Florida oranges', 'p': '$5', 'c': 'drink', 'i': '../src/images/drinks/orange.png'},
    {'t': 'Grape juice', 'd': 'Freshly pressed grapes', 'p': '$5', 'c': 'drink', 'i': '../src/images/drinks/grape.png'},
    {'t': 'Beer', 'd': 'Our homebrewed rich hoppy beer', 'p': '$9', 'c': 'drink', 'i': '../src/images/drinks/beer.png'},
    {'t': 'Sake', 'd': 'Select Japanese rice wine', 'p': '$12', 'c': 'drink', 'i': '../src/images/drinks/sake.png'},
]

const food = [
    {'t': 'World artisan cheese platter', 'd': 'A platter of chef selected Brie, Gouda, and Blue cheese.', 'p': '$16', 'c': 'food', 'i': '../src/images/meals/cheeseplate.png'},
    {'t': 'Hearty Salad', 'd': 'Fresh and Organic veggies served with homemade ranch sauce. Includes: tomatoes, brocolli, lettuce, baby carrots, fresh olives', 'p': '$9', 'c': 'food', 'i': '../src/images/meals/salad.png'},
    {'t': 'Mediterranean Mahi Mahi', 'd': 'Slice of buttery Mahi Mahi, served with fresh lemon and asparagus.', 'p': '$25', 'c': 'food', 'i': '../src/images/meals/mahi.png'},
    {'t': "Tiger's favorite lasagna", 'd': "Grounded Kobe beef baked with chef's sauce, Ricotta and mozarella cheese layered with lasagna noodles, topped with permesean", 'p': '$18', 'c': 'food', 'i': '../src/images/meals/lasagna.png'},
    {'t': 'Ultimate Paella', 'd': 'Herby rice cooked with New Zealand mussel, jumbo shrimp, calamari with special seasoning and saucy sauce.', 'p': '$48', 'c': 'food', 'i': '../src/images/meals/paella.png'},
    {'t': 'Pan seared steak', 'd': 'Japanese A4 Wagyu Tenderloin beef steak cooked to perfection and served with potato fries, tomatoes and lettuce.', 'p': '$65', 'c': 'food', 'i': '../src/images/meals/steak.png'},
    {'t': 'Wild Salmon', 'd': 'Slice of Wild caught salmon, lightly cooked on the outside and raw inside', 'p': '$32', 'c': 'food', 'i': '../src/images/meals/salmon.png'},   
]

const contacts = [
    { 'location': 'Arizona (Main)', 'address': '4112 Elk Rd. Little Tucson, AZ, 85716', 'phone': '123-456-789' },
    { 'location': 'New York', 'address': '4298 Davisson Street New York, NY, 10027', 'phone': '456-789-123' },
    { 'location': 'Texas', 'address': '663 Beeghley Street Temple, TX, 76501', 'phone': '789-123-456' },
]