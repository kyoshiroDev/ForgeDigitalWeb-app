import {Component, inject} from '@angular/core';
import {ProjetsService} from "../../services/projets.service";
import {Projets} from "../../models/projets";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'fdw-projets',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './projets.component.html',
  styleUrl: './projets.component.css',
})
export class ProjetsComponent {
  protected readonly projetService: ProjetsService = inject(ProjetsService)

  projects: Projets[] = this.projetService.getAllProjects();
}
