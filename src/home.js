export function homeBuilder() {
    const homeDiv = document.createElement('div');
    homeDiv.classList.add('home');
    const itmesParent = document.getElementById('tab-cont')
    itmesParent.appendChild(homeDiv);
    
        const homeHeader = document.createElement('div');
        homeHeader.classList.add('homeHeader');
        homeDiv.appendChild(homeHeader);
            
            //h2
            const homeH2 = document.createElement('h2');
            homeH2.textContent = 'Our restaurant'
            homeHeader.appendChild(homeH2);


            //p
            const homeP = document.createElement('p');
            homeP.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
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
        awardP.textContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
        ut labore et dolore magna aliqua. Volutpat blandit aliquam etiam erat velit scelerisque 
        in dictum.`;
        awardInfoDiv.appendChild(awardP);





    
    return;
}