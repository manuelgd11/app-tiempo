import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {

  teams: any[] = [];

  ngOnInit(): void {}

  constructor() {}

  verPartidos() {
    let equipos: any[] = [
      { id_equipo: 2616 },
      { id_equipo: 2626 },
      { id_equipo: 2626 },
      { id_equipo: 2621 },
    ];
    let apikey =
      '5a8193631d562c4203c0d48b54cd857d481eb613a37ed854b55f589c06e0938e';

    equipos.forEach((element: { id_equipo: any }) => {
      const resultado = fetch(
        `https://allsportsapi.com/api/football/?&met=Teams&teamId=${element.id_equipo}&APIkey=${apikey}`
      );

      resultado
        .then((respuesta) => respuesta.json())
        .then((data) => {
          this.teams.push(data.result[0]);
        });
    });
    console.log(this.teams);
  }
}
