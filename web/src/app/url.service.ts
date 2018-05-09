import { Injectable } from '@angular/core';

import { environment } from '../environments/environment';


@Injectable()
export class UrlService {

  private readonly baseUrl: string;

  constructor() {
   // this.baseUrl = window.location.protocol + '//' + window.location.host + '/WasteControl.Api/';
   this.baseUrl = "http://localhost:64448/"
  }

  getApiUrl(endpoint: Endpoint) {
    return this.baseUrl + endpoint.value;
  }
}

export interface Endpoint { readonly value: string }

export class Endpoints {
  static readonly login: Endpoint = { value: 'api/Login' };
  static readonly problemPage: (page: number, pageSize: number) => Endpoint = (page, pageSize) => { return { value: `api/Problem/filtered/${page}/${pageSize}` }};
  static readonly getProblem: (id: number) => Endpoint = (id) => { return { value: `api/Problem/${id}/` }};
  static readonly getInternetUser: (id: number) => Endpoint = (id) => { return { value: `api/InternetUser/${id}/` }};
  static readonly getProblemComments: (problemId: number) => Endpoint = (problemId) => { return { value: `api/Comment/${problemId}/` }};
  static readonly comment: Endpoint = { value: 'api/Comment' };
  static readonly getProblemTimeSpent: (id: number) => Endpoint = (id) => { return { value: `/api/TimeSpent/problem/${id}/` }};
  static readonly getUserTimeSpent: (userId: string) => Endpoint = (userId) => { return { value: `/api/TimeSpent/user/${userId}/` }};
  static readonly getTimeSpent: (id: number) => Endpoint = (id) => { return { value: `/api/TimeSpent/${id}/` }};
  static readonly timeSpent: Endpoint = { value: 'api/TimeSpent' };
  static readonly getProblemTags: (id: number) => Endpoint = (id) => { return { value: `/api/Tag/problem/${id}/` }};
  static readonly getTag: (id: number) => Endpoint = (id) => { return { value: `/api/Tag/${id}/` }};
  static readonly tags: Endpoint = { value: 'api/Tag' };
}
