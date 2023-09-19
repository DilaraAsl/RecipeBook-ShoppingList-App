import { Component,OnInit } from '@angular/core';
import * as $ from 'jquery'; // Import jQuery

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit() {
    // $(document).ready(function () {
    //   // Initialize Bootstrap JavaScript components
    //   $('[data-toggle="dropdown"]').dropdown();
    // });
  }
}
