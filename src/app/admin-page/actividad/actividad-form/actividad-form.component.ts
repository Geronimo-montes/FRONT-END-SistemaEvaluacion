import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActividadRepository } from 'src/app/model/actividad/actividad.repository';
import { AprendizajeEsperado, AreaFormacion } from 'src/app/model/actividad/aformacion.model';

@Component({
  selector: 'app-actividad-form',
  templateUrl: './actividad-form.component.html',
  styleUrls: ['./actividad-form.component.css']
})
export class ActividadFormComponent implements OnInit {
  public imgPerfil: string;
  public enableAprendizaje: boolean = true;
  private form: FormGroup;
  constructor(private reposytory: ActividadRepository, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      perfil                : '',
      situacionDidactica    : '',
      duracion              : '',
      tipoActividad         : '',
      areaFormacion         : 0,
      aprendizajeEsperado   : 0,
      nombreEvidencia       : '',
      formatoEsperado       : 0,
      descripcionEvidencia  : '',
      inicio                : '',
      desarrollo            : '',
      cierre                : '',
      recursos              : '',
    });
    this.form.get('aprendizajeEsperado').disable();
  }

  get areasFormacion(): AreaFormacion[] {
    return this.reposytory.getAreaFormacion();
  }

  get aprendizajesEsperados(): AprendizajeEsperado[] {
    return this.reposytory.getAprendizajeEsperado();
  }

  changeAreaFormacion(): void {
    let idAreaFormacion = this.form.get('areaFormacion').value;
    if(idAreaFormacion != 0){
      this.reposytory.getAprendizajeEsperadoByAreaFormacion(idAreaFormacion);
      this.form.get('aprendizajeEsperado').enable();
    }else{
      this.form.get('aprendizajeEsperado').disable();
    }
  }

  load(event){
    const reader = new FileReader();    
    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
      
      reader.onload = () => {
        this.imgPerfil = reader.result as string;
        this.form.patchValue({
          fileSource: reader.result
        });
      };
    }
  }

  agregarActividad(form: FormGroup, perfil: HTMLInputElement) {
    let data = new FormData();
    data.append('nombre', this.form.controls['situacionDidactica'].value);
    data.append('duracionMinutos', this.form.controls['duracion'].value);
    data.append('tipoActividad', this.form.controls['tipoActividad'].value);
    data.append('idAprendizajeEsperado', this.form.controls['aprendizajeEsperado'].value);
    data.append('idDiagnostico', null);
    data.append('inicio', this.form.controls['inicio'].value);
    data.append('desarrollo', this.form.controls['desarrollo'].value);
    data.append('cierre', this.form.controls['cierre'].value);
    data.append('recursos', this.form.controls['recursos'].value);
    data.append('evaluacion', '');
    data.append('perfil', perfil.files[0]);
    this.reposytory.insterActividad(data);
  }
}
