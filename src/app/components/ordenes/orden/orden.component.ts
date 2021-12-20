import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { OrdenService } from 'src/app/services/orden.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-orden',
  templateUrl: './orden.component.html',
  styleUrls: ['./orden.component.css']
})
export class OrdenComponent implements OnInit {
  nuevaorden: FormGroup;
  submitted = false;
  loading: boolean | undefined;
  pendientePago: boolean | undefined;
  id: string | null;
  titulo  = 'Nueva Orden';

  constructor(private fb: FormBuilder, 
    private _ordenService: OrdenService, 
    private router: Router,
    private toastr: ToastrService,
    private aRouter: ActivatedRoute) { 
    this.nuevaorden = this.fb.group({
      nombre:['',   Validators.required],
      apellido:['', Validators.required],
      celular:['',  Validators.required],
      email:['',    Validators.required],
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.visualizarOrden();
  }
  agregarOrden() {
    this.submitted = true;
    if (this.nuevaorden.invalid){
      return;
    }
    const orden: any = {
      nombre:   this.nuevaorden.value.nombre,
      apellido: this.nuevaorden.value.apellido,
      email:    this.nuevaorden.value.email,
      celular:  this.nuevaorden.value.celular,
      fechaAlta: new Date(),
      estado:   'Pendiente',
      pendientePago: true,
      
    }
    this.loading        = true;
    this.pendientePago  = true;
    this._ordenService.nuevaOrden(orden).then(() => {
      console.log('Nueva orden regitrada con existo');
      this.toastr.success('Nueva orden regitrada con exito', 'Nueva Orden', {
        positionClass: 'toast-bottom-right',
      });
      this.loading =false;
      this.router.navigate(['/ordenes'])
    }).catch(err => {
      this.loading =false;
      console.log('Error al registrar la orden')
    })
    console.log(orden);

  }

  visualizarOrden() {
    if (this.id !== null) {
      this.titulo = 'Ver Orden'
      this.loading = true;
      this._ordenService.getOrden(this.id).subscribe(data => {
        console.log(data.payload.data()['nombre'])
        this.loading = false
        this.nuevaorden.setValue({
          nombre:   data.payload.data()['nombre'],
          apellido: data.payload.data()['apellido'],
          email:    data.payload.data()['email'],
          celular:  data.payload.data()['celular']
        })
      })
    }
  }

}
