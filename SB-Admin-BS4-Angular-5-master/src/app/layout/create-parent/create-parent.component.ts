import { Component, Input, Output, EventEmitter } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { parentService } from '../parent.service';

import { Observable } from 'rxjs/Observable';
import { parent } from '../parent';


@Component({
    selector: 'app-form',
    templateUrl: './create-parent.component.html',
    styleUrls: ['./create-parent.component.scss'],
    animations: [routerTransition()],
    providers: [parentService]
})
export class CreateParentComponent  {

    create_parent_form: FormGroup;
  // @Output will tell the parent component (AppComponent) that an event happened in this component
  @Output() show_read_parents_event = new EventEmitter();
  
    constructor( 
        private parentService: parentService,
        formBuilder: FormBuilder)
         {    // based on our html form, build our angular form
            this.create_parent_form = formBuilder.group({
              name: ["", Validators.required],
              LastName: ["", Validators.required],
              age: ["", Validators.required],
               phone: ["", Validators.required],
               email: ["", Validators.required],
               password: ["", Validators.required],
              
            
            });
        }
         // user clicks 'create' button
  createparent() {
    
        // send data to server
        this.parentService.createparent(this.create_parent_form.value)
          .subscribe(
          parent => {
            // show an alert to tell the user if parent was created or not
            console.log(parent);
    
            // go back to list of parents
            //this.readparents();
          },
          error => console.log(error)
          );
      }
    
      // user clicks the 'read parents' button
      readparents() {
        this.show_read_parents_event.emit({ title: "Read parents" });
      }
    
      // what to do when this component were initialized

    ngOnInit() {}
}
