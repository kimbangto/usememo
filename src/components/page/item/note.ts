import { BaseComponent } from '../../component.js';

export class NoteComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, body: string) {
    super(
      `<section class="note">
        <h3 class="note_title"></h3>
        <p class="note_body"></p>
      </section>`
    );

    const noteTitleElement = this.element.querySelector(
      '.note_title'
    )! as HTMLHeadingElement;
    noteTitleElement.textContent = title;

    const noteBodyElement = this.element.querySelector(
      '.note_body'
    )! as HTMLParagraphElement;
    noteBodyElement.textContent = body;
  }
}
