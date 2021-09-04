import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user = 'Beliz';
  
  
  items=  [
    {description: "kahvaltı", action: "hayır" },
    {description: "spor", action: "hayır" },
    {description: "ödev", action: "hayır" },
    {description: "sinema", action: "hayır" }

  ];
  
}
