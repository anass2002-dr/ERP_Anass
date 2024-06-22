import { Injectable } from '@angular/core';
import { Article } from '../../models/Article/Article';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { ArticleDTO } from '../../models/Article/ArticleDTO';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  private url: string = `${environment.ApiUrl}`;
  // public getArticle(): Article {
  //   let articel = new Article();
  //   articel.idArticel = 1;
  //   articel.ArticelRef = 'AR0001';
  //   articel.DescriptionArticle = 'Laptop lenovo i7-6eme generation 16ram 512GB SSD';
  //   articel.PurchasePrice = 300;
  //   articel.SellingPrice = 450.25;
  //   articel.ArticelFamily = 'laptop';
  //   return articel;
  // }

  public GetDataArticle(): Observable<Article[]> {
    return this.http.get<Article[]>(`${this.url}/Home/GetArticles`);
  }
  public createArticle(article: ArticleDTO): Observable<ArticleDTO> {
    return this.http.post<ArticleDTO>(`${this.url}/Home/AddArticle`, article);
  }
}
