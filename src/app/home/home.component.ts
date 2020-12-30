import { Component, OnInit } from '@angular/core';
import { ParticlesConfig } from './particles-config';

declare let particlesJS: any; // Required to be properly interpreted by TypeScript.

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', '../app.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.invokeParticles();
  }

  public invokeParticles(): void {
    console.log('here');
    particlesJS('particles-js', ParticlesConfig, null);
  }

}
