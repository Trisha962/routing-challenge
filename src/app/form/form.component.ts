import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class UserFormComponent implements OnInit {
  submitted = false;
  user: User;
  constructor() {
    this.user={id:1, username:'James',email:'james@gmail.com',phone:8910989021}
    }

  ngOnInit(): void {
  }

  onSubmit() {
    this.submitted = true;
    alert("User details submitted!!")
  }

}