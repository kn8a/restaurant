export function homeBuilder() {
    const homeDiv = document.createElement('div');
    homeDiv.classList.add('home');
    const itmesParent = document.getElementById('tab-cont')
    itmesParent.appendChild(homeDiv);

    const cookImg = document.createElement('img');


    
        const homeHeader = document.createElement('div');
        homeHeader.classList.add('homeHeader');
        homeDiv.appendChild(homeHeader);
            
            //h2
            const homeH2 = document.createElement('h2');
            homeH2.textContent = 'Our restaurant'
            homeHeader.appendChild(homeH2);


            //p
            const homeP = document.createElement('p');
            homeP.textContent = 'We believe in the commitment to our community and in fostering long term relationships with local farmers and fishermen. Our menus reflect these connections, featuring local, seasonal produce and sustainably sourced seafood, meats and veggies.';
            homeHeader.appendChild(homeP);
        
        //award
        const homeAwardCont = document.createElement('div');
        homeAwardCont.classList.add('awardCont');
        homeDiv.appendChild(homeAwardCont);

        const awardDiv = document.createElement('div');
        awardDiv.classList.add('award');
        homeAwardCont.appendChild(awardDiv);

        //img
        const awardImg = document.createElement('img');
        awardImg.src = '../src/images/award.png';
        awardDiv.appendChild(awardImg);

        const awardInfoDiv = document.createElement('div');
        awardDiv.appendChild(awardInfoDiv);

        const awardH3 = document.createElement('h3');
        awardH3.textContent = `#1 rated in 2022`;
        awardInfoDiv.appendChild(awardH3);

        const awardP = document.createElement('p');
        awardP.textContent = `Best family restaurant according to all family members. Only my family has been polled`;
        awardInfoDiv.appendChild(awardP);

        const quote = document.createElement('div');
        quote.classList.add('quote');
        homeDiv.appendChild(quote);

        const cite = document.createElement('cite');
        cite.textContent = `Food is romantic. Soul. It's about putting everything in your heart onto the plate. Hoping it's perceived well. Honestly, it's about passion. It's about love.`;
        quote.appendChild(cite);

        const citeName = document.createElement('p');
        citeName.textContent = ` - Mai.`;
        quote.appendChild(citeName);   
        
        cookImg.src = '../src/images/mai.png';
        homeDiv.appendChild(cookImg);
    return;
}