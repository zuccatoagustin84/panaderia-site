import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const contactSchema = z.object({
  name: z.string().min(2, 'El nombre es demasiado corto'),
  email: z.string().email('Email inválido'),
  phone: z.string().optional(),
  subject: z.string().min(3, 'Por favor, especifica un asunto'),
  message: z.string().min(10, 'El mensaje es demasiado corto'),
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactForm: React.FC = () => {
  const { 
    register, 
    handleSubmit, 
    formState: { errors, isSubmitting },
    reset
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    // Simulamos el envío del formulario
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Form data:', data);
    alert('Mensaje enviado correctamente. Gracias por contactarnos.');
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="form-label">Nombre</label>
          <input 
            id="name" 
            type="text" 
            {...register('name')} 
            className="form-input"
          />
          {errors.name && <p className="form-error">{errors.name.message}</p>}
        </div>
        
        <div>
          <label htmlFor="email" className="form-label">Email</label>
          <input 
            id="email" 
            type="email" 
            {...register('email')} 
            className="form-input"
          />
          {errors.email && <p className="form-error">{errors.email.message}</p>}
        </div>
      </div>
      
      <div>
        <label htmlFor="phone" className="form-label">
          Teléfono <span className="text-gray-500">(opcional)</span>
        </label>
        <input 
          id="phone" 
          type="tel" 
          {...register('phone')} 
          className="form-input"
        />
        {errors.phone && <p className="form-error">{errors.phone.message}</p>}
      </div>
      
      <div>
        <label htmlFor="subject" className="form-label">Asunto</label>
        <input 
          id="subject" 
          type="text" 
          {...register('subject')} 
          className="form-input"
        />
        {errors.subject && <p className="form-error">{errors.subject.message}</p>}
      </div>
      
      <div>
        <label htmlFor="message" className="form-label">Mensaje</label>
        <textarea 
          id="message" 
          rows={5} 
          {...register('message')} 
          className="form-input"
        />
        {errors.message && <p className="form-error">{errors.message.message}</p>}
      </div>
      
      <button 
        type="submit" 
        className="btn btn-primary w-full md:w-auto md:px-8" 
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
      </button>
    </form>
  );
};

export default ContactForm;