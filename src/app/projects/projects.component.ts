import { Component, OnInit } from '@angular/core';
import { Project } from '../models/models';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [
    {
      title: 'E-Medicare',
      technologies: 'Java, Angular, MySQL',
      description: [
        'A responsive and dynamic web application for purchasing medicines online.',
      ],
    },
    {
      title: 'WORD SENSE DISAMBIGUATION',
      technologies: 'Python',
      description: [
        ' A NLP based project to determine the sense of an ambiguous word used in a particular context.',
      ],
    },
    
    {
      title: 'BPC ONLINE',
      technologies: 'HTML, CSS, JS, PHP, MySQL  ',
      description: [
        'A complete online semi-interactive web application for the students and teachers of a college.',
      ],
    },
    {
      title: 'BPC STORE MANAGEMENT SYSTEM ',
      technologies: 'Visual Basic 6.0, SQL Server',
      description: [
        'A windows based application to automate the working of a stationary outlet run by college administration.',
      ],
    },
    
  ];
  constructor() {}

  ngOnInit(): void {}
}
