import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,TableModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'PruebaSixIT';


  public customers = [
    {
      id: 1000,
      name: 'James Butt',
      country: {
          name: 'Algeria',
          code: 'dz'
      },
      company: 'Benton, John B Jr',
      date: '2015-09-13',
      status: 'unqualified',
      verified: true,
      activity: 17,
      representative: {
          name: 'Ioni Bowcher',
          image: 'ionibowcher.png'
      },
      balance: 70663
  },
  {
      id: 1001,
      name: 'Josephine Darakjy',
      country: {
          name: 'Egypt',
          code: 'eg'
      },
      company: 'Chanay, Jeffrey A Esq',
      date: '2019-02-09',
      status: 'proposal',
      verified: true,
      activity: 0,
      representative: {
          name: 'Amy Elsner',
          image: 'amyelsner.png'
      },
      balance: 82429
  },
  ]
}
