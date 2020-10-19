import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer2',
  templateUrl: './footer2.component.html',
  styleUrls: ['./footer2.component.css']
})
export class Footer2Component implements OnInit {
footerText: string;
  constructor() { 
    this.footerText = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam neque illo totam quae id sunt eaque esse itaque distinctio ad doloremque cupiditate sapiente aliquid laboriosam, culpa soluta optio dolor maiores!
    Nulla libero non, saepe impedit incidunt fuga pariatur illum facere maiores ipsa harum consectetur dignissimos explicabo sequi temporibus reiciendis eum nesciunt doloremque! Earum aperiam asperiores, tempora cumque accusantium pariatur. Maxime!
    Dolore deleniti dolorum id cumque fuga, explicabo officiis nostrum dolorem aliquid temporibus rem praesentium, expedita maiores vel, atque architecto quis nobis. Ullam, suscipit accusantium doloribus quasi atque debitis molestias ab.
    Aliquam minus aut aliquid ea dicta doloremque, asperiores pariatur nemo labore porro magni, facilis tenetur voluptatem non vitae repellat dolorem vero laboriosam sed. Quas dolor quod, ratione esse aperiam quaerat?`;
  }
  ngOnInit(): void {
  }

}
