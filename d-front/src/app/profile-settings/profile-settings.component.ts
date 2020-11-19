import {Component, OnInit, ViewChild} from '@angular/core';
import {MatAccordion} from '@angular/material/expansion';

@Component({
  selector: 'app-profile-settings',
  templateUrl: './profile-settings.component.html',
  styleUrls: ['./profile-settings.component.css']
})
export class ProfileSettingsComponent implements OnInit {
  hide = true;
  @ViewChild(MatAccordion) accordion: MatAccordion;
  constructor() { }

  ngOnInit(): void {
  }

}
