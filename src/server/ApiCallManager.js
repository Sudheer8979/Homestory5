/**
 * Copyright (C) NextGen Technology Solutions, Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Written by NextGen <info@ngstek.com>, Jan 2020
 */

 import axios from 'axios';

 const noInternetResponse = {
   statusCode: '888',
   statusMessage: 'No Internet Connection',
 };
 const myApi = axios.create();
 
 export const getCall = async obj => {
   var input = navigator.onLine;
   if (input) {
     let authToken = localStorage.getItem('authToken');
     var headers = {
       'Accept': 'application/json',
       'Content-Type': 'application/json',
       'token': authToken,
     };
     const response = await fetch(obj.url, {method: 'GET', headers: headers});
     const responseJson = await response.json();
     if (response.headers.get('token')) {
       localStorage.setItem('authToken', response.headers.get('token'));
     }
     return responseJson;
   }
   return noInternetResponse;
 };
 
 export const postCall = async obj => {
   var input = navigator.onLine;
   if (input) {
     let authToken = localStorage.getItem('authToken');
     let authLoginToken = localStorage.getItem('authLoginToken');
     var headers = {
       'Accept': 'application/json',
       'Content-Type': 'application/json'
      
     };
     if (authToken) {
       headers = {
         'Accept': 'application/json',
         'Content-Type': 'application/json',
         'token': authToken,
       };
     }
     if (authLoginToken) {
       headers = {
         'Accept': 'application/json',
         'Content-Type': 'application/json',
         'otp_token': authLoginToken,
       };
     }
     const response = await fetch(obj.url, {
       method: 'POST',
       headers: headers,
      
       body: JSON.stringify(obj.body),
     });
     const responseJson = await response.json();
     if (response.headers.get('token')) {
       localStorage.setItem('authToken', response.headers.get('token'));
     }
     if (response.headers.get('otp_token')) {
       localStorage.setItem('authLoginToken', response.headers.get('otp_token'));
     }
     return responseJson;
   }
   return noInternetResponse;
 };
 
 export const putCall = async obj => {
   var input = navigator.onLine;
   if (input) {
     let authToken = localStorage.getItem('authToken');
     var headers = {
       'Accept': 'application/json',
       'Content-Type': 'application/json',
       'token': authToken,
     };
     const response = await fetch(obj.url, {
       method: 'PUT',
       headers: headers,
       body: JSON.stringify(obj.body),
     });
     const responseJson = await response.json();
     if (response.headers.get('token')) {
       localStorage.setItem('authToken', response.headers.get('token'));
     }
     return responseJson;
   }
   return noInternetResponse;
 };
 
 export const deleteCall = async obj => {
   var input = navigator.onLine;
   if (input) {
     let authToken = localStorage.getItem('authToken');
     var headers = {
       'Accept': 'application/json',
       'Content-Type': 'application/json',
       'token': authToken,
     };
     const response = await fetch(obj.url, {
       method: 'DELETE',
       headers: headers,
       body: JSON.stringify(obj.body),
     });
     const responseJson = await response.json();
     if (response.headers.get('token')) {
       localStorage.setItem('authToken', response.headers.get('token'));
     }
     return responseJson;
   }
   return noInternetResponse;
 };
 