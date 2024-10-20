import { Component } from '@angular/core';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent {

StudentName:string='';
StudentAge:any;
// students:Student[]=['yassmin','hager'];
// ages:any[]=['4','5'];
students: Student[] = [];

AddStudent(name: string,age: any) {

  
  const newStudent = new Student(name, age);
  this.students.push(newStudent)
  }
  RemoveStudent(studentname: string) {
    const indexToRemove = this.students.findIndex(
      (student) => student.name === studentname
    );
    console.log(this.students[indexToRemove])
    this.students.splice(indexToRemove, 1);
  }
}


export class Student {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}