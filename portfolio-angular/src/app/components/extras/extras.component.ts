import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {EmbedVideoService} from "ngx-embed-video";

@Component({
  selector: 'app-extras',
  templateUrl: './extras.component.html',
  styleUrls: ['./extras.component.css'],
})

export class ExtrasComponent implements OnInit {
  yt1_iframe_html: any;
  youtubeUrl1 = 'https://www.youtube.com/watch?v=qoWRs7lXtYE';

  constructor(private embedService : EmbedVideoService) {
    this.yt1_iframe_html = this.embedService.embed(this.youtubeUrl1);
  }

  ngOnInit() {
  }

}
