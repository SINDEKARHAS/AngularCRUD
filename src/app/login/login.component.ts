import { Component } from '@angular/core';
import { AbstractControl, FormBuilder,FormGroup,FormControl,Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  submitted =false;

  form: FormGroup = new FormGroup({

                email:new FormControl(),
                password:new FormControl(),

        })

  constructor(private frmbuilder : FormBuilder,
              private actrt : ActivatedRoute,private rt:Router){}

ngOnInit(){

  this.form = this.frmbuilder.group(
    {

          email:['',Validators.required,Validators.email],
          password:['',Validators.required,
                      ],
    },

  )
}

get func(): {
[key: string]: AbstractControl}
{
  return this.form.controls;

}

onSubmit(e:string,pwd:string):void
{
  this.submitted=true
      if(this.form.invalid)
            {
            return;
            }

if(e=='admin@gmail.com' && pwd=="1234")
{
  this.rt.navigate(['/employee'])
}

}
}
