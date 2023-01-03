import { Component, OnInit } from '@angular/core';
import { WorkExperience } from '../models/models';

@Component({
  selector: 'work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css'],
})
export class WorkExperienceComponent implements OnInit {
  workExpList: WorkExperience[] = [
    {
      role: 'Java Fullstack Developer Trainee',
      company: 'MPHASIS',
      duration: 'June 2022 - Now',
      description: [
        'Completed training in java full stack development',
      ],
    },
    
  ];
  constructor() {}

  ngOnInit(): void {}
}
