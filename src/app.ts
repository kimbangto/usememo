import { Component } from './components/component.js';
import { ImageComponent } from './components/page/item/image.js';
import { NoteComponent } from './components/page/item/note.js';
import { TodoComponent } from './components/page/item/todo.js';
import { YoutubeComponent } from './components/page/item/youtube.js';
import { Composable, PageComponent, PageItemComponent } from './components/page/page.js';

class App {
  private readonly page: Component & Composable;
  constructor(appRoot: HTMLElement) {
    this.page = new PageComponent(PageItemComponent);
    this.page.attachTo(appRoot);

    const image = new ImageComponent('Image Title', 'https://picsum.photos/300/150');
    this.page.addChild(image);

    const youtube = new YoutubeComponent('Video Title', 'https://www.youtube.com/watch?v=OlZveif37Z4');
    this.page.addChild(youtube);

    const note = new NoteComponent('Note Title', 'Note Body');
    this.page.addChild(note);

    const todo = new TodoComponent('Todo Title', 'Todo Item');
    this.page.addChild(todo);
  }
}

new App(document.querySelector('.document')! as HTMLElement);
