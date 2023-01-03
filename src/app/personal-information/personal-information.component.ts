import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css'],
})
export class PersonalInformationComponent implements OnInit {
  myData: string[][] = [
    ['Name', 'Aliyas John'],
    ['DOB', '22/06/1997'],
    ['Work Exp', '6 Months'],
    ['Education', 'MCA (2022)'],
    
  ];

  aboutMe: string[] = [
    'My name is Aliyas John, and I am a graduate of the Master of Computer Applications (MCA) program.',
    'Having developed a keen interest in software development during my studies, I am now eager to apply my knowledge and skills in this field.',
    'With a solid educational background and a passion for programming, I am confident that I can make a valuable contribution to any organization.',
    'I am motivated to learn new technologies, while at the same time, build upon my current skill set.', 
    'I am excited to see where my journey in software development will take me.',
  ];

  constructor() {}

  ngOnInit(): void {}
}
