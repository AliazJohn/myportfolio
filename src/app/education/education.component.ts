import { Component, OnInit } from '@angular/core';
import { Education } from '../models/models';

@Component({
  selector: 'education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {
  educationList: Education[] = [
    {
      institute: "College of Engineering, Trivandrum",
      course: 'MCA',
      duration: '2019-2022',
      score: '78%',
    },
    {
      institute: 'BPC College, Piravom',
      course: 'BCA',
      duration: '2016-2019',
      score: '68%',
    },
    {
      institute: 'Mar Coorilose Memorial Higher Secondary School, Pattimattom',
      course: 'Higher Secondary - Computer Science',
      duration: '2014-2016',
      score: '82%',
    },
    {
      institute: 'Stella Maris Convent School, Thiruvaniyoor',
      course: 'AISSE (CBSE 10 Board)',
      duration: '2013-2014',
      score: '89%',
    },
   
  ];

  constructor() {}

  ngOnInit(): void {}
}
