import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  ContentChild,
  OnInit,
  ViewChild
} from '@angular/core';
import {ChildComponent} from '../child/child.component';

@Component({
  selector: 'app-inter',
  templateUrl: './inter.component.html',
  styleUrls: ['./inter.component.scss']
})
export class InterComponent implements OnInit, AfterViewChecked, AfterViewInit, AfterContentChecked, AfterContentInit {
  @ViewChild(ChildComponent, {static: false}) viewChild: ChildComponent;
  @ContentChild(ChildComponent, {static: false}) contentChild: ChildComponent;

  constructor() { }

  ngOnInit() {
    console.log(this.viewChild)
    console.log(this.contentChild)
    console.log('onInit');
  }

  ngAfterContentInit() {
    console.log(this.viewChild)
    console.log(this.contentChild)
    this.contentChild.content = 'contenChild is changed';
    console.log('04ngAfterContentInit执行了');
  }

  ngAfterContentChecked() {
    console.log('05ngAfterContentChecked执行了-');
  }

  ngAfterViewInit() {
    // this.msg = 'viewInit';
    console.log(this.viewChild)
    console.log(this.contentChild)
    setTimeout(() => this.viewChild.content = 'viewChild is changed');
    console.log('06 ngAfterViewInit执行了');
  }

  ngAfterViewChecked() {
    console.log('07ngAfterViewChecked执行了');
  }


  changeViewMsg() {
    this.viewChild.content = 'viewChild is changed by contnetBtn';
  }

  changeContentMsg() {
    this.contentChild.content = 'contenChild is changed by contnetBtn';
  }
}
