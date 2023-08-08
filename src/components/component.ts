export interface Component {
  attachTo(parent: HTMLElement, position?: InsertPosition): void;
  removeFrom(parent: HTMLElement): void;
}

// HTMLelement 생성을 캡슐화한 class
export class BaseComponent<T extends HTMLElement> implements Component {
  protected readonly element: T;

  constructor(htmlString: string) {
    const template = document.createElement('template');
    template.innerHTML = htmlString;
    this.element = template.content.firstElementChild! as T;
  }

  attachTo(parent: HTMLElement, position: InsertPosition = 'afterbegin') {
    parent.insertAdjacentElement(position, this.element);
  }

  removeFrom(parent: HTMLElement): void {
    if (parent !== this.element.parentElement) {
      throw new Error('선택한 아이템을 찾을 수 없습니다!');
    }
    parent.removeChild(this.element);
  }
}
