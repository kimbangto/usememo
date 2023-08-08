import { BaseComponent, Component } from '../component.js';

export interface Composable {
  addChild(child: Component): void;
}

type OnCloseListener = () => void;

interface SectionContainer extends Component, Composable {
  setOnCloseListener(listener: OnCloseListener): void;
}

type SectionContainerConstructor = {
  new (): SectionContainer;
};

export class PageItemComponent extends BaseComponent<HTMLElement> implements SectionContainer {
  private closeListener?: OnCloseListener;

  constructor() {
    super(`<li class="page-item">
            <div class="page-item_controls">
              <button class="close" onclick="deletePageItem">&times;</button>
            </div>
            <section class="page-item_body"></section>
          </li>`);

    const closeBtn = this.element.querySelector('.close')! as HTMLButtonElement;
    closeBtn.onclick = () => {
      this.closeListener && this.closeListener(); // closeListener가 있으면 closeListener를 호출
    };
  }

  addChild(child: Component) {
    const container = this.element.querySelector('.page-item_body')! as HTMLElement;
    child.attachTo(container);
  }

  setOnCloseListener(listener: OnCloseListener) {
    this.closeListener = listener;
  }
}

export class PageComponent extends BaseComponent<HTMLUListElement> implements Composable {
  constructor(private pageItemConstructor: SectionContainerConstructor) {
    super('<ul class="page"></ul>');
  }

  addChild(section: Component) {
    const item = new this.pageItemConstructor();
    item.addChild(section);
    item.attachTo(this.element, 'beforeend');
    item.setOnCloseListener(() => {
      if (window.confirm('정말로 삭제하시겠습니까?')) {
        item.removeFrom(this.element);
      }
    });
  }
}
