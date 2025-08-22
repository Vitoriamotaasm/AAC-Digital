import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  template: `
    <nav class="w-full bg-blue-600 p-4 text-white flex justify-between items-center">
      <h1 class="text-xl font-bold">AAC Digital</h1>
      <ul class="flex gap-4">
        <li><a routerLink="/" routerLinkActive="underline">Início</a></li>
        <li><a routerLink="/pictogramas" routerLinkActive="underline">Pictogramas</a></li>
        <li><a routerLink="/relatorios" routerLinkActive="underline">Relatórios</a></li>
      </ul>
    </nav>
  `
})
export class NavbarComponent { }
