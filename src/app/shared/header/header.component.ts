import { Component, OnInit } from '@angular/core';
import { faSlidersH, faSearch, faEnvelope, faBell } from '@fortawesome/free-solid-svg-icons';
import { Md5 } from 'ts-md5/dist/md5';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  faSlidersH = faSlidersH;
  faSearch = faSearch;
  faEnvelope = faEnvelope;
  faBell = faBell;
  avatarUrl = 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50';

  constructor() { }

  ngOnInit() {
    const hash = Md5.hashStr('jdegenne@gismartware.com');
    this.avatarUrl = 'https://www.gravatar.com/avatar/' + hash;
  }

}
