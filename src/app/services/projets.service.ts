import { Injectable } from '@angular/core';
import {Projets} from "../models/projets";

@Injectable({
  providedIn: 'root'
})
export class ProjetsService {
  protected projects:Projets[] = [
    {
      id:1,
      image: "/assets/Images/site-crazy-dice.webp",
      alt: "image du site pour un jeux de dé",
      titre: "The crazy Dice",
      description: "Création d'un mini jeux de dé pour un exercice d'entrainement",
      languages: ["HTML", "CSS", "JavaScript"],
      buttonSite: "https://the-crazy-dice.netlify.app/",
      buttonGithub: "https://github.com/kyoshiroDev/The-Crazy-Dice"
    },
    {
      id:2,
      image: "/assets/Images/ToDo-Liste.webp",
      alt: "image de l'application To-Do Liste",
      titre: "To-Do Liste",
      description: "Création d'une To-Do Liste pour mettre en pratique mes début sur Angular 18+",
      languages: ['Angular', "Tailwind"],
      buttonSite: "https://mon-app-todo.netlify.app/",
      buttonGithub: "https://github.com/kyoshiroDev/ToDoListe"
    },
    {
      id:3,
      image: "/assets/Images/site-garage-v-parrot.webp",
      alt: "image du site pour le garage v parrot",
      titre: "Garage V Parrot",
      description: "Création d'un site de garage automobile pour mettre en pratique mes acquis ",
      languages: ['React', "Next.Js","Tailwind"],
      buttonSite: "https://refuge-des-tortues.netlify.app/",
      buttonGithub: "https://github.com/kyoshiroDev/Site-des-tortues"
    },
  ]

  getAllProjects(): Projets[]{
    return this.projects;
  }
}
