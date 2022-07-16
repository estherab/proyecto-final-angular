import { SetsService } from './../../services/sets.service';
import { SetInterface } from './../../models/set.interface';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sets',
  templateUrl: './sets.component.html',
  styleUrls: ['./sets.component.scss']
})
export class SetsComponent implements OnInit {
  public setList: SetInterface[] = [];
  public wantedList: SetInterface[] = [];

  public filter: string = "";
  public search: string = "";

  constructor(private setsService: SetsService, private router: Router) { }

  ngOnInit(): void {
    this.setsService.getSets().subscribe((data: any) => {
      this.setList = data;
      this.wantedList = this.setList;
    })
  }

  public catchSet(set: any) {

    this.setsService.editItem(set);
    this.router.navigate(["/management"]);
  }

  public onChangeFilter(search: string) {
    this.wantedList = this.setList.filter(set => set.name.toLowerCase().includes(search.trim().toLowerCase()));;
  }
}
