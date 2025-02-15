import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactFormService {

  protected readonly http = inject(HttpClient)
  protected readonly apiUrl = "https://forgedigitalweb-api.onrender.com/"

  formContact(formData: any) {
    this.http.post(`${this.apiUrl}send-email`, formData).subscribe({
      next: response => console.log("Réponse du serveur :", response),
      error: err => console.error("Erreur :", err)
    });
  }
  
}
