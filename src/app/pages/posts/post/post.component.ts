import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.sass']
})
export class PostComponent implements OnInit {

  @Input() mensaje;
  @Output() clickPost = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }


  onClick(): void {
    this.clickPost.emit(this.mensaje.id);
  }


}
