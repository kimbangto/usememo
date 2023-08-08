import { BaseComponent, Component } from '../component.js';

export interface Composable {
  addChild(child: Component): void;
}

class PageItemComponent extends BaseComponent<HTMLElement> implements Composable {
  constructor() {
    super(`<li class="page-item">
            <div class="page-item_controls">
              <button class="close" onclick="deletePageItem">&times;</button>
            </div>
            <section class="page-item_body"></section>
          </li>`);

    const closeBtn = this.element.querySelector('.close')! as HTMLButtonElement;
    closeBtn.onclick = () => {
      this.element.remove();
    };
  }

  addChild(child: Component) {
    const container = this.element.querySelector('.page-item_body')! as HTMLElement;
    child.attachTo(container);
  }
}

export class PageComponent extends BaseComponent<HTMLUListElement> implements Composable {
  constructor() {
    super('<ul class="page"></ul>');
  }

  addChild(section: Component) {
    const item = new PageItemComponent();
    item.addChild(section);
    item.attachTo(this.element, 'beforeend');
  }
}
