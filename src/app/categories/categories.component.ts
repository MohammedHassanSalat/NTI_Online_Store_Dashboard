import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { CategoriesService } from '../services/categories.service';
import { CommonModule, SlicePipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [SlicePipe,RouterLink,CommonModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent implements OnInit, OnDestroy {
  subscription: any;
  categories: any[] = [];
  pagination: any;
  page: number = 1;
  search: string = '';
  constructor (private _AuthService: AuthService,
              private _CategoriesService: CategoriesService) { }

  loadCategories() {
    this.subscription = this._CategoriesService.getCategories(50,this.page,'-createdAt',this.search).subscribe({
      next: (res) => {
        this.categories = res.data;
        this.pagination = res.pagination;
      }, error: (err) => { }
    })
  }

  deleteCategory(categoryId: string) {
    this._CategoriesService.deleteCategory(categoryId).subscribe({
      next: (res) => {
        this.loadCategories();
        alert('Category Deleted')
      }, error: (err) => { }
    })
  }

  changePage(page: number) {
    this.page = page;
    this.loadCategories();
  }

  searchData(data: string) {
    this.search = data;
    this.loadCategories();
  }

  ngOnInit(): void {
    this._AuthService.checkToken();
    this.loadCategories();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
