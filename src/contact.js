export const contactArray = [
    { 'location': 'Arizona (Main)', 'address': '4112 Elk Rd. Little Tucson, AZ, 85716', 'phone': '123-456-789' },
    { 'location': 'New York', 'address': '4298 Davisson Street New York, NY, 10027', 'phone': '456-789-123' },
    { 'location': 'Texas', 'address': '663 Beeghley Street Temple, TX, 76501', 'phone': '789-123-456' },
]

export function contactBuilder(drinks) {
    const drinkItems = document.createElement('div');
    drinkItems.classList.add('contact-items');
    const itmesParent = document.getElementById('tab-cont')
    itmesParent.appendChild(drinkItems);
    for (let i = 0; i < drinks.length; i++) {
        const item = document.createElement('div');
        item.classList.add('contact-item');
        drinkItems.appendChild(item);
            //item image
            const itemImg = document.createElement('img');
            itemImg.src = drinks[i].location;
            item.appendChild(itemImg);
            //info div
            const divInfo = document.createElement('div');
            divInfo.classList.add('info');
            item.appendChild(divInfo);
                //title
                const itemTitle = document.createElement('h2');
                itemTitle.textContent = drinks[i].location;
                divInfo.appendChild(itemTitle);
                //description
                const itemDesc = document.createElement('p');
                itemDesc.textContent = drinks[i].address
                divInfo.appendChild(itemDesc);
                //price
                const itemPrice = document.createElement('h4');
                itemPrice.textContent = drinks[i].phone;
                divInfo.appendChild(itemPrice);
        
    }
    return;
}