import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-team",
  templateUrl: "./team.component.html",
  styleUrls: ["./team.component.scss"],
})
export class TeamComponent implements OnInit {
  team = [
    {
      name: "Jeancy Kankonde",
      position: "Fondateur",
      picture: "assets/images/profile.png",
    },
    {
      name: "Paula George",
      position: "Directrice Marketing",
      picture: "assets/images/profile 1.png",
    },
    {
      name: "Greg Smith",
      position: "Campaign Manager",
      picture: "assets/images/profile 2.png",
    },
    {
      name: "Sofia Gonzales",
      position: "Agent Manager",
      picture: "assets/images/profile 3.png",
    },
    {
      name: "Alan Rajesh",
      position: "Directeur Finance",
      picture: "assets/images/profile 4.png",
    },
  ];
  constructor() {}

  ngOnInit() {}
}
