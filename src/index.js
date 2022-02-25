import { drinksBuilder, drinksArray } from './drinks.js';
import { foodArray, foodBuilder } from './food.js';
import { contactArray, contactBuilder } from './contact.js';
import { homeBuilder } from './home.js';
import './style.css';
import tiger from './images/tiger.png';

const log = console.log;

const pageBuild = (() => {
    function createTab(name) {
        const tab = document.createElement('li');
        tab.classList.add('tab');
        tab.setAttribute('data-tab-target', '#'+name);
        tab.textContent = name;
        tabsUl.appendChild(tab);
        if (name == 'home') {
            tab.classList.add('active');
        }
        
        tab.addEventListener('click', () => {
            tabs.forEach(tab => tab.classList.remove('active'));
            tab.classList.add('active');
            switch (name) {
                case 'home':
                    removeChilds(tabContDiv);
                    homeBuilder();
                    break;
                case 'food':
                    removeChilds(tabContDiv);
                    foodBuilder(foodArray);
                    break;
                case 'drinks':
                    removeChilds(tabContDiv);
                    drinksBuilder(drinksArray);
                    break;
                case 'locations':
                    removeChilds(tabContDiv);
                    contactBuilder(contactArray);
                    break;
            }
        })
        return tab;
    }

    const removeChilds = (parent) => {
        while (parent.lastChild) {
            parent.removeChild(parent.lastChild);
        }
    };
    
    const container = document.getElementById('content');
        const header = document.createElement('div');
        header.classList.add('header');
        container.appendChild(header);
            //logo
            const logo = document.createElement('img');
            logo.classList.add('logo');
            logo.src = tiger;
            header.appendChild(logo);
            //slogan
            const slogan = document.createElement('h1');
            slogan.textContent = 'Tiger of Mai';
            header.appendChild(slogan);
                
            //tabs
            const tabsDiv = document.createElement('div');
            tabsDiv.classList.add('tabs');
            container.appendChild(tabsDiv);
                //ul
                const tabsUl = document.createElement('ul');
                tabsUl.classList.add('tabsList');
                tabsDiv.appendChild(tabsUl);
                    //li
                    createTab('home');
                    createTab('food');
                    createTab('drinks');
                    createTab('locations');
                    
            //tabs content
            const tabContDiv = document.createElement('div');
            tabContDiv.classList.add('tab-cont');
            tabContDiv.setAttribute('id', 'tab-cont');
            tabsDiv.appendChild(tabContDiv);

            //footer
            const footer = document.createElement('div');
            footer.classList.add('footer');
            container.appendChild(footer);
            footer.textContent = 'kn8a'

            homeBuilder();

})()

const tabs = document.querySelectorAll('[data-tab-target]');
