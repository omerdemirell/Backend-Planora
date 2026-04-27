import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

import { TranslatePipe, TranslateService } from '@ngx-translate/core';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';

@Component({
  selector: 'app-root',
  imports: [
    RouterLink,
    RouterOutlet,
    TranslatePipe,
    NzIconModule,
    NzLayoutModule,
    NzMenuModule,
    NzButtonModule,
    NzDropDownModule,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

  isCollapsed = false;

  // aktif dil
  currentLanguage = 'tr';

  constructor(private translateService: TranslateService) {

    // desteklenen diller
    this.translateService.addLangs(['tr', 'en']);

    // default dil
    this.translateService.setDefaultLang('tr');

    // localStorage'dan oku
    const savedLang = localStorage.getItem('language') || 'tr';

    this.currentLanguage = savedLang;
    this.translateService.use(savedLang);
  }

  changeLanguage(lang: string) {
    this.currentLanguage = lang;
    this.translateService.use(lang);
    localStorage.setItem('language', lang);
  }
}