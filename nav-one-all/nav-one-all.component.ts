import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';
import getISOWeek from 'date-fns/getISOWeek';
import { en_US, NzI18nService, zh_CN } from 'ng-zorro-antd/i18n';

@Component({
  selector: 'app-nav-one-all',
  templateUrl: './nav-one-all.component.html',
  styleUrls: ['./nav-one-all.component.scss']
})
export class NavOneAllComponent implements OnInit {

  constructor() {
      this.getScreenSize();
  }

  screenWidth: number;
  isCollapsed = false;
  open = false;
  nzTooltipTitle: any;

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
        this.screenWidth = window.innerWidth;
  }

  ngOnInit(): void {
    if (this.screenWidth < 700){
      this.isCollapsed = false;
    }
  }

// !  mobile

xl(){

        this.isCollapsed = false ;
        this.open = false ;
}
  al(){
    if (true){
           this.isCollapsed = false;
           this.open = true;
    }
  }


  date = null;
  isEnglish = false;


  onChange(result: Date): void {
    console.log('onChange: ', result);
  }

  getWeek(result: Date): void {
    console.log('week: ', getISOWeek(result));
  }

  changeLanguage(): void {
    this.isEnglish = !this.isEnglish;
  }

  size: 'large' | 'small' | 'default' = 'default';
  dateFormat = 'yyyy/MM/dd';
  monthFormat = 'yyyy/MM';
  plainFooter = 'plain extra footer';
  footerRender = () => 'extra footer';
  radioValue = 'Apple';
  options = [
    { label: 'Apple', value: 'Apple' },
    { label: 'Pear', value: 'Pear' },
    { label: 'Orange', value: 'Orange' }
  ];
}
