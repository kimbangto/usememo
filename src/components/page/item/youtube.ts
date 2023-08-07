import { BaseComponent } from '../../component.js';

export class YoutubeComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, url: string) {
    super(
      `<section class="youtube">
      <h3 class="youtube_title"></h3>
      <div class="youtube_holder">
      <iframe class="youtube_iframe"
        width="300"
        height="150"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen>
      </iframe>
      </div>
    </section>`
    );

    const videoElement = this.element.querySelector(
      '.youtube_iframe'
    )! as HTMLIFrameElement;
    videoElement.src = this.convertToEmbeddedURL(url);

    const titleElement = this.element.querySelector(
      '.youtube_title'
    )! as HTMLHeadingElement;
    titleElement.textContent = title;
  }

  private convertToEmbeddedURL(url: string): string {
    const splitedURL = url.split('/');
    const videoID = splitedURL[splitedURL.length - 1].replace('watch?v=', '');
    const template = 'http://youtube.com/embed/';
    return template.concat(videoID);
  }
}
