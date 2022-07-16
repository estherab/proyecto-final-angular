import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SetsService } from 'src/app/services/sets.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.scss']
})

export class ManagementComponent implements OnInit {
  public setForm!: FormGroup;
  public newSet = this.setsService.setData;
  public setID = this.setsService.setData.id;

  constructor(private formBuilder: FormBuilder, private setsService: SetsService, private router: Router) { }

  ngOnInit(): void {
    this.setsService.clearSet();

    this.setForm = this.formBuilder.group({
      name: [this.newSet.name, [Validators.required]],
      price: [this.newSet.price, [Validators.required]],
      image: [this.newSet.image, [Validators.required]],
      collection: [this.newSet.collection, [Validators.required]],
      pieces: [this.newSet.pieces, [Validators.required]],
      age: [this.newSet.age, [Validators.required]],
      measures: [this.newSet.measures, [Validators.required]],
      year: [this.newSet.year, [Validators.required]],
    })

    this.setForm.valueChanges.subscribe((changes) => {
      this.newSet = changes;
    })
  }

  public onSubmit() {
    if (this.setID !== "") {
      this.setsService.editSet(this.setID, this.newSet).subscribe();
      alert("Set editado");
    }

    else {
      this.setsService.postSet(this.newSet).subscribe();
      alert("Set creado")
    }

    //Resetar el formulario
    this.setForm.reset();
    //En cuanto termine de ejecutarse el onsubmit se vaya dinamicamente como si fuera un routerLink a comics otra vez
    this.router.navigate(["/sets"])
  }

  public delete() {
    if (confirm("¿Estás seguro de borrar el set?") == true) {
      this.setsService.deleteSet(this.setID).subscribe();
      this.setForm.reset();
      alert("Set borrado");
      this.router.navigate(["/sets"])
    }

    else {
      this.router.navigate(["/sets"])
    }
  }

}
