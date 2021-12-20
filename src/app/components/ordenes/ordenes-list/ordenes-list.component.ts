import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { OrdenService } from 'src/app/services/orden.service';

@Component({
  selector: 'app-ordenes-list',
  templateUrl: './ordenes-list.component.html',
  styleUrls: ['./ordenes-list.component.css']
})
export class OrdenesListComponent implements OnInit {
  ordenes: any[] =[];

  constructor(private _ordenService: OrdenService) {
   // this.items = firestore.collection('items').valueChanges();
  }

  ngOnInit(): void {
    this.obtenerOrdenes()
  }
  obtenerOrdenes() {
    this._ordenService.obtenerOrdenes().subscribe(data => {
      this.ordenes = [];
      data.forEach((element: any) => {
        this.ordenes.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data(),
        });
      });
      console.log(this.ordenes);
    });
  }
}