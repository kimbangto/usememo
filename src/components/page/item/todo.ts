import { BaseComponent } from '../../component.js';

export class TodoComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, item: string) {
    super(
      `<section class="todo">
        <h3 class="todo_title"></h3>
        <input id="todo_item" type="checkbox" name="todo_item"/>
        <label class="todo_item" for="todo_item"></label>
      </section>`
    );

    const todoTitleElement = this.element.querySelector(
      '.todo_title'
    )! as HTMLHeadingElement;
    todoTitleElement.textContent = title;

    const todoItemElement = this.element.querySelector(
      '.todo_item'
    )! as HTMLLabelElement;
    todoItemElement.textContent = item;
  }
}
