import { BaseComponent } from '../../component.js';

export class YoutubeComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, url: string) {
    super(
      `<section class="youtube">
      <div class="youtube_holder">
      <iframe class="youtube_thumbnail" width="480" height="270" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      <p class="youtube_title"></p>
    </section>`
    );

    const videoElement = this.element.querySelector(
      '.youtube_thumbnail'
    )! as HTMLIFrameElement;
    const videoID = url.split('/');
    videoElement.src =
      'http://youtube.com/embed/' + videoID[videoID.length - 1];
    console.log(videoID[videoID.length - 1].replace('watch?v=', ''));

    const titleElement = this.element.querySelector(
      '.youtube_title'
    )! as HTMLParagraphElement;
    titleElement.textContent = title;
  }
}
