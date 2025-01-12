import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { IForm } from '../interfaces/iform.interface';
import { lastValueFrom } from 'rxjs';
import { IExp } from '../interfaces/iexp.interface';

@Injectable({
  providedIn: 'root'
})
export class StoryService {

  private httpClient = inject(HttpClient);
  private baseUrl = environment.apiUrl;

  getAllForm(): Promise<IForm[]> {
    return lastValueFrom(
      this.httpClient.get<IForm[]>(this.baseUrl + '/form')
    )
  }

  getAllExp(): Promise<IExp[]> {
    return lastValueFrom(
      this.httpClient.get<IExp[]>(this.baseUrl + '/exp')
    )
  }

}
