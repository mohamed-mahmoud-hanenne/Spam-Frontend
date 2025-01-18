import { Component } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-email-tester',
  standalone: true, // Composant autonome
  imports: [HttpClientModule, FormsModule, CommonModule], // Modules nécessaires
  template: `
    <div class="container">
      <h1>Détecteur de Spam</h1>
      <form (ngSubmit)="checkSpam()">
        <label for="email">Entrer un email:</label>
        <textarea 
          id="email"
          [(ngModel)]="email"
          name="email"
          required
        ></textarea>
        <button type="submit">Vérifier</button>
      </form>
      <div *ngIf="result !== null">
        <p><strong>Résultat :</strong> {{ result }}</p>
      </div>
    </div>
  `,
})
export class EmailTesterComponent {
  email: string = '';
  result: string | null = null;

  constructor(private http: HttpClient) {}

  checkSpam() {
    if (this.email.trim() === '') {
      this.result = 'Veuillez entrer un email.';
      return;
    }

    this.http
    .post<{ spam: boolean }>('http://127.0.0.1:5000/predict', { email: this.email })
    .subscribe(
      (response) => {
        console.log('Réponse API :', response); // Log pour debug
        this.result = response.spam ? 'Spam' : 'Non-spam';
      },
      (error) => {
        console.error('Erreur API :', error);
        this.result = 'Erreur lors de la vérification. Réessayez.';
      }
    );
  
  
  }
}
