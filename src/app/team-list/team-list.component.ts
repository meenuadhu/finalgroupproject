import { Component, OnInit } from '@angular/core';
import { TeamService } from 'src/app/services/team.service';
import { Team } from '../models/team';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit {

  teamMembersList: Team[] = []

  constructor(private teamService: TeamService) { }

  ngOnInit(): void {
    
    this.teamMembersList = this.teamService.getTeam()
    

  }

}
