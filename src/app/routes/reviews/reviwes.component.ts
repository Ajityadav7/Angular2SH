import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-reviwes',
  templateUrl: './reviwes.component.html',
  styleUrls: ['./reviwes.component.css']
})
export class ReviwesComponent implements OnInit {
  reviewForm:any;
  course:string[]=["java","HTML","CSS3","Angular","react JS"];
    constructor(private formbuilder:FormBuilder) 
    this.reviewForm=this.formbuilder.group({
      name:['',[Validators.required]],
      message:['', Validators.required],
    email:['',[Validators.required,Validators.pattern("^[A-Za-z][A-Za-z_\.0-9]+@[A-Za-z]")]]
    }
  
 

  ngOnInit() {
  }

  function isSymbols(Input:FormControl){
    let temp:RegExp=new RegExp('[\._$@0-9]');
    let temp1:boolean=false;
    if(!temp.test(input.value))
    temp1=true;
    return temp1?null:{needFormate:true};
  }

}
