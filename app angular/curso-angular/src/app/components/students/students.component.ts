import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../../services/communication.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  name: string;
  age: number;
  students: student[];

  constructor(private communication: CommunicationService) { }

  ngOnInit() {
    this.getStudents();
  }

  getStudents() {
    this.communication.get("students").then((students: student[]) => {
      console.log(students);
      this.students = students;
    }, error => {
      console.log(error);
    })
  }

  newStudent() {
    this.communication.put("student", {nombre: this.name, edad: this.age}).then(status => {
      this.getStudents();
      console.log(status);
    }, error => {
      console.log(error);
    })
  }

  deleteStudent(id: number) {
    console.log(id);
    this.communication.delete(`student/${id}`).then(status => {
      this.getStudents();
      console.log(status);
    }, error => {
      console.log(error);
    })
  }

}

interface student {
  id: number;
  edad: number;
  nombre: string;
}
