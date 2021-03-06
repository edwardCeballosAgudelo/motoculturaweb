import { Component, OnInit } from '@angular/core';
import { TipoService } from '../../services/tipo.service';
import { NgForm } from '@angular/forms';

declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-tipos',
  templateUrl: './tipos.component.html',
  styleUrls: ['./tipos.component.css']
})
export class TiposComponent implements OnInit {
  idEdit: any;
  descriptionEdit: any;
  nameEdit: any;
  idErase: any;
  name: string;
  tipoNormas: any;

  constructor(public tipoServices: TipoService) { }

  ngOnInit() {
    this.getTypeNormas();
  }

  getTypeNormas() {
    this.tipoServices.getTypeNormas().then((tipoNorma) => {
      const respuesta = JSON.parse(tipoNorma['_body']);
      this.tipoNormas = respuesta.normaTypes;
    }).catch((err) => {
      console.log(err);
    });
  }

  saveTypeNormas(myForm: NgForm) {
    const postParams = {
      name : myForm.value.name,
      descripcion: myForm.value.description
    };

    this.tipoServices.newTypeNormas(postParams).then((typeNorma) => {
      alert(typeNorma['statusText']);
      $('#addModal').modal('hide');
      this.getTypeNormas();
    }).catch((err) => {
      console.log(err);
    });
  }

  deleteTypeNormas() {
    this.tipoServices.deleteTypeNorma(this.idErase).then((typeNorma) => {
      const respuesta = JSON.parse(typeNorma['_body']);
      $('#deleteModal').modal('hide');
      this.getTypeNormas();
    }).catch((err) => {
      console.log(err);
    });
  }

  updateTypeNorma(editForm: NgForm) {
    const postParams = {
      id: this.idEdit,
      name : editForm.value.nameEdit,
      descripcion: editForm.value.descriptionEdit
    };
    this.tipoServices.updateTypeNormas(postParams).then((typeNorma) => {
      alert(typeNorma['statusText']);
      $('#editModal').modal('hide');
      this.getTypeNormas();
    }).catch((err) => {
      console.log(err);
    });
  }

  changeId(id) {
     this.idErase = id;
  }

  changeData(item) {
    this.idEdit = item._id;
    this.nameEdit = item.nombre;
    this.descriptionEdit = item.descripcion;
  }
}
