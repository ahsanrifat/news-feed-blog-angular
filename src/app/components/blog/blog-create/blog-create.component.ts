import { Component, OnInit, ViewChild } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import * as DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';

@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.scss'],
})
export class BlogCreateComponent implements OnInit {
  // public Editor = ClassicEditor;
  public Editor = DecoupledEditor;
  @ViewChild('myEditor') myEditor: any;
  public model = {
    editorData: '<p>Hello, world!</p>',
  };

  constructor() {}

  ngOnInit(): void {}
  public onReady(editor) {
    editor.ui
      .getEditableElement()
      .parentElement.insertBefore(
        editor.ui.view.toolbar.element,
        editor.ui.getEditableElement()
      );
  }
  submitBlog() {
    console.log(this.myEditor.editorInstance.getData());
  }
}
