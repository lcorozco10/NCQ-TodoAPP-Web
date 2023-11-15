import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { FooterComponent } from "./Components/footer/footer.component";
import { TodoTableComponent } from "./Components/todo-table/todo-table.component";
import { MenuComponent } from "./Components/menu/menu.component";
import { TodoPageComponent } from "./Components/todo-page/todo-page.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [CommonModule, RouterOutlet, FooterComponent, TodoTableComponent, MenuComponent, TodoPageComponent]
})
export class AppComponent implements OnInit {
  title = 'NCQ Todo App';
  ngOnInit(): void {
    initFlowbite();
  }
}
