import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lab-ia',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  templateUrl: './lab-ia.page.html',
  styleUrls: ['./lab-ia.page.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LabIaPage {
  prompt: string = '';
  resultado: any = null;
  puntajeTotal: number = 0;
  nivel: string = '';
  recomendaciones: string[] = [];

  analizarPrompt() {
    const texto = this.prompt.toLowerCase();

    const claridad = texto.length > 25 ? 85 : 40;
    const contexto =
      texto.includes("como") ||
      texto.includes("actua") ||
      texto.includes("imagina") ? 90 : 50;
    const formato =
      texto.includes("lista") ||
      texto.includes("tabla") ||
      texto.includes("pasos") ||
      texto.includes("formato") ? 95 : 60;
    const especificidad =
      texto.includes("5") ||
      texto.includes("3") ||
      texto.includes("detallado") ||
      texto.includes("breve") ? 90 : 55;

    this.resultado = { claridad, contexto, formato, especificidad };
    this.puntajeTotal = Math.round((claridad + contexto + formato + especificidad) / 4);

    if (this.puntajeTotal >= 85) {
      this.nivel = "Experto 🚀";
    } else if (this.puntajeTotal >= 70) {
      this.nivel = "Avanzado 🔥";
    } else if (this.puntajeTotal >= 55) {
      this.nivel = "Intermedio ⚡";
    } else {
      this.nivel = "Básico 📘";
    }

    this.recomendaciones = [];

    if (!texto.includes("actua")) {
      this.recomendaciones.push("Define un rol para la IA (ej: Actúa como profesor).");
    }
    if (!texto.includes("lista") && !texto.includes("tabla")) {
      this.recomendaciones.push("Especifica el formato de salida (lista, tabla, pasos...).");
    }
    if (texto.length < 20) {
      this.recomendaciones.push("Agrega más contexto para mejorar precisión.");
    }
    if (!texto.match(/\d/)) {
      this.recomendaciones.push("Incluye cantidad específica (ej: 5 pasos, 3 ejemplos).");
    }
  }
}