import { Component, OnInit } from '@angular/core';
import { Ipost } from '../shared/models/cards';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  allpost : Array<Ipost> = 
  [
    {
        userId: 1,
        id: 1,
        title: "Html 5",
        body: "HTML is the standard markup language for Web pages. With HTML you can create your own Website."
    },
    {
        userId: 1,
        id: 2,
        title: "Css 3",
        body: "CSS is the language we use to style an HTML document.CSS describes how HTML elements should be displayed."
    },
    {
        userId: 1,
        id: 3,
        title: "JavaScript",
        body: "JavaScript is a scripting or programming language that allows you to implement complex features on web pages —"
    },
    {
        userId: 1,
        id: 4,
        title: "TypeScript",
        body: "Typescript is a syntactic superset of javascript which adds static typing."
    },
    {
        userId: 1,
        id: 5,
        title: "Angular",
        body: "Angular is a TypeScript-based open-source front-end platform that makes it easy to build applications with in web/mobile/desktop. "
    },
    {
        userId: 1,
        id: 6,
        title: "Bootstrap 4",
        body: "Bootstrap 4 is a newer version of Bootstrap, which is the most popular HTML, CSS, and JavaScript framework for developing responsive, mobile-first websites. "
    },
    {
        userId: 1,
        id: 7,
        title: "Sass",
        body: "Sass is a CSS pre-processor.Sass reduces repetition of CSS and therefore saves time."
    },

    {
        userId: 10,
        id: 99,
        title: "Flex",
        body: "The flex property sets the flexible length on flexible items."
    },
    {
        userId: 10,
        id: 100,
        title: "Git",
        body: "Global Information Tracker(Git).it is a version control system.Git helps you keep track of code changes."
    }
]
  constructor() { }

  ngOnInit(): void {
  }

}
