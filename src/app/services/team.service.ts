import { Injectable } from '@angular/core';
import { Team } from 'src/app/models/team'

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  teamMembers : Team[] = [
    new Team('Tony Thomas', 'Chairman' , 'He is the Chairman' ),
    new Team('Santhosh', 'CEO' , 'He is the CEO' ),
    new Team('Mr. Gopinathan Nair', ' Head-Finance & Admin' , 'He is the CEO' , '../../assets/img/team/GOPI1.jpg'),
    new Team('Dr. Manoj A S', 'Head – Corporate Operating Unit' , 'He is the CEO' , '../../assets/img/team/manoj.jpg'),
    new Team('Mr. Nidhin Das ', 'Company Secretary & Lead – HR' , 'He is the CEO' , '../../assets/img/team/nidhin.jpg'),
    new Team('Mr. Riji N Das', 'Head – Knowledge Officer' , 'He is the CEO' , '../../assets/img/team/pradeep.jpg'),
    new Team('Dr. Pradeep.S', 'Head – Retail Operating Unit' , 'He is the CEO' , '../../assets/img/team/Riji1.jpg'),
    new Team('Dr. Sreekanth.D', 'Senior Knowledge Officer' , 'He is the CEO' , '../../assets/img/team/sreekanth-1.png'),
    new Team('Mr. Sreeraj.A', 'Senior  IT Infrastructure' , 'He is the CEO' , '../../assets/img/team/sreeraj1.jpg'),


  ]

  constructor() { }

  getTeam() : Team[]{
    return this.teamMembers
  }
  
}
