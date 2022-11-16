import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ArticleService } from 'src/app/services/article.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  searchTermControl = new FormControl('');
  constructor(private articleService: ArticleService) { }
  componentName = "form";
  @Input() articleItem: string = '';
  fullArticles?= [];
  totalRecords: any;
  page:any = 1;

  ngOnInit(): void {
  }

  searchKeyWord(): void {
    this.articleService.getData(this.searchTermControl.value).subscribe((data) => {
      console.log(data.message.items);
      this.fullArticles = data.message.items;
      this.totalRecords = this.fullArticles.length;
    });
  }

}
