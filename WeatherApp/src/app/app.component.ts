import { Component } from '@angular/core';

// import { FormControl, Validators } from '@angular/forms';
import { User } from './_models';
import { Router } from '@angular/router';
import { AuthenticationService } from './_services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  
  currentUser: User;
  title = 'WeatherManApp';

  constructor(private router: Router,
              private authenticationService: AuthenticationService) {
      this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  // to log user out
  logout() {
      this.authenticationService.logout();
      this.router.navigate(['/login']);
  }
}



