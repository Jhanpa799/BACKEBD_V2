import { Injectable } from '@nestjs/common';
import { Resend } from 'resend';
import { Cotization } from 'src/cotizations/entities/cotization.entity';

@Injectable()
export class MailService {

  private resend = new Resend(process.env.RESEND_API_KEY);

  async sendCotizationNotification(data: Cotization) {

    try {

      await this.resend.emails.send({
        from: 'Moon3D <onboarding@resend.dev>',
        to: process.env.EMAIL_USER!,
        subject: 'Nueva cotización recibida',
        html: `
          <h2>Nueva Cotización</h2>
          <p><strong>Nombre:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Teléfono:</strong> ${data.phone}</p>
          <p><strong>Descripción:</strong> ${data.description}</p>
        `,
      });

      console.log('Correo enviado correctamente');
      return true;

    } catch (error) {
      console.error('Error enviando correo:', error);
      return false;
    }
  }
}
