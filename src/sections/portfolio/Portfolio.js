import React from 'react';

import ProjectCards from './components/ProjectCards/ProjectCards';
import Bubbles from '../../animations/Bubbles/Bubbles';

import quoteGenerator from '../../assets/images/projects/quote-generator.png';
import boardGame from '../../assets/images/projects/board-game.png';
import restaurantReviews from '../../assets/images/projects/restaurant-reviews.png';
import todolistOptimization from '../../assets/images/projects/todolist-optimization.png';
import mern from '../../assets/images/projects/mern.png';
import portfolio from '../../assets/images/projects/portfolio.png';
import covid19 from '../../assets/images/projects/covid19.png';
import expenseTracker from '../../assets/images/projects/expense-tracker.png';
import foodRecipes from '../../assets/images/projects/food-recipes.png';
import todolist from '../../assets/images/projects/todolist.png';
import schemaDatabase from '../../assets/images/projects/schema-database.png';
import './Portfolio.modules.css';

const Portfolio = () => {
    const projects = [
        {
            title: "MERN APP", 
            tag: "React, Nodejs, Mongodb, Express",
            organism: "Online course",
            projectLink: "https://github.com/chloeturchi/mern-app", 
            codeLink: "https://github.com/chloeturchi/mern-app",
            src: mern
        },
        {
            title: "PORTFOLIO", 
            tag: "React, React libraries",
            organism: "Personal project",
            projectLink: "https://github.com/chloeturchi/portfolio", 
            codeLink: "https://github.com/chloeturchi/portfolio",
            src: portfolio
        },
        {
            title: "FOOD RECIPE", 
            tag: "React",
            organism: "Online course",
            projectLink: "https://github.com/chloeturchi/food-recipe-react", 
            codeLink: "https://github.com/chloeturchi/food-recipe-react",
            src: foodRecipes
        },
        {
            title: "TODO LIST",
            organism: "Online course",
            tag: "React, Redux",
            projectLink: "https://github.com/chloeturchi/todolist-react-redux", 
            codeLink: "https://github.com/chloeturchi/todolist-react-redux",
            src: todolist
        },
        {
            title: "EXPENSE TRACKER",
            organism: "Online course", 
            tag: "React",
            projectLink: "https://github.com/chloeturchi/expense-tracker-react", 
            codeLink: "https://github.com/chloeturchi/expense-tracker-react",
            src: expenseTracker
        },
        {
            title: "COVID19 TRACKER",
            organism: "Online course", 
            tag: "React",
            projectLink: "https://github.com/chloeturchi/covid19-tracker-react", 
            codeLink: "https://github.com/chloeturchi/covid19-tracker-react",
            src: covid19
        },
        {
            title: "RESTAURANT REVIEWS", 
            tag: "Javascript, Google Maps API",
            organism: "School project",
            projectLink: "https://projet7.projetschloeturchi.fr/", 
            codeLink: "https://github.com/chloeturchi/OC-restaurant-reviews-app",
            src: restaurantReviews
        },
        {
            title: "QUOTE GENERATOR", 
            tag: "Javascript",
            organism: "School project",
            projectLink: "https://projet5.projetschloeturchi.fr/", 
            codeLink: "https://github.com/chloeturchi/OC-quote-generator-app",
            src: quoteGenerator
        },
        {
            title: "BOARD GAME", 
            tag: "Javascript",
            organism: "School project",
            projectLink: "https://projet6.projetschloeturchi.fr/", 
            codeLink: "https://github.com/chloeturchi/OC-board-game-app",
            src: boardGame
        },
        {
            title: "TODO LIST OPTIMIZATION", 
            tag: "Javascript, Jasmine, Wiki Github",
            organism: "School project",
            projectLink: "https://github.com/chloeturchi/OC-todo-list-app", 
            codeLink: "https://github.com/chloeturchi/OC-todo-list-app",
            src: todolistOptimization
        },
        {
            title: "EXPRESS FOOD DATABASE", 
            tag: "MySQL, UML diagrams",
            organism: "School project",
            projectLink: "https://github.com/chloeturchi/OC-database-and-UML-diagram-scheme", 
            codeLink: "https://github.com/chloeturchi/OC-database-and-UML-diagram-scheme",
            src: schemaDatabase
        },
    ];

    return (
        <section id="portfolio">
            <h2>Projects</h2>
            <Bubbles />
            <ProjectCards projects={projects}/>
        </section>
    )
};

export default Portfolio;