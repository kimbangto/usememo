import { BaseComponent, Component } from './component';
import { Composable } from './page/page';

type OnListener = () => void;

export class Modal extends BaseComponent<HTMLElement> implements Composable {
  private closeListener?: OnListener;
  private submitListener?: OnListener;
  constructor() {
    super(`<section class="modal">
                <button class="close">&times;</button>
                <div class="modal_body">Modal body</div>
                <button class="modal_submit">ADD</button>
            </section>`);

    const closeBtn = this.element.querySelector('.close')! as HTMLButtonElement;
    closeBtn.onclick = () => {
      this.closeListener && this.closeListener(); // closeListener가 있으면 closeListener를 호출
    };

    const submitBtn = this.element.querySelector('.modal_submit')! as HTMLButtonElement;
    submitBtn.onclick = () => {
      this.submitListener && this.submitListener(); // submitListener가 있으면 submitListener 호출
    };
  }

  addChild(child: Component): void {
    // throw new Error('Method not implemented.');
  }

  SetOnCloseListener(onListener: OnListener) {
    this.closeListener = onListener;
  }

  SetOnSubmitListener(onListener: OnListener) {
    this.submitListener = onListener;
  }
}
