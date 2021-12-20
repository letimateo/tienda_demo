import { Injectable, Injector } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdenService {

  constructor(private firestore:AngularFirestore) { }

  nuevaOrden(orden: any) {
    return this.firestore.collection('orden').add(orden);
  }

  obtenerOrdenes(): Observable<any> {
    return this.firestore.collection('orden', ref => ref.orderBy('fechaAlta', 'asc')).snapshotChanges();
  }

  getOrden(id: string): Observable<any> {
    return this.firestore.collection('orden').doc(id).snapshotChanges();
  }
}
