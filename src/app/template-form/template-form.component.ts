import { Component, OnInit } from '@angular/core';
import{Iregister} from '../shared/model/template'
import { from } from 'rxjs';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {
  model = new Iregister();
  

  constructor() { }
  adduser(data){
    console.log(data);
  }

  ngOnInit() {
  }

}
