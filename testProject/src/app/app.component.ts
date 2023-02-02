import { Component } from '@angular/core';
import { ShowdataService } from './showdata.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testProject';
constructor(private service:ShowdataService){}
userData:any
ngOnInit(){
this.service.getData().subscribe(res =>{
  console.log(res)
  this.userData = res
})
}
}
