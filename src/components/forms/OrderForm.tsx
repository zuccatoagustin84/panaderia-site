import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const orderSchema = z.object({
  name: z.string().min(2, 'El nombre es demasiado corto'),
  email: z.string().email('Email inválido'),
  phone: z.string().min(9, 'Por favor, introduce un teléfono válido'),
  orderType: z.enum(['cake', 'bread', 'pastry', 'other']),
  description: z.string().min(10, 'Por favor, describe tu pedido con más detalle'),
  quantity: z.string().min(1, 'Indica la cantidad'),
  date: z.string().refine(val => !isNaN(Date.parse(val)), {
    message: 'Por favor, introduce una fecha válida',
  }),
  message: z.string().optional(),
});

type OrderFormData = z.infer<typeof orderSchema>;

const OrderForm: React.FC = () => {
  const { 
    register, 
    handleSubmit, 
    formState: { errors, isSubmitting },
    reset
  } = useForm<OrderFormData>({
    resolver: zodResolver(orderSchema),
    defaultValues: {
      orderType: 'cake',
    }
  });

  const onSubmit = async (data: OrderFormData) => {
    // Simulamos el envío del formulario
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Order data:', data);
    alert('Pedido recibido correctamente. Te contactaremos pronto para confirmarlo.');
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
        <label htmlFor="phone" className="form-label">Teléfono</label>
        <input 
          id="phone" 
          type="tel" 
          {...register('phone')} 
          className="form-input"
        />
        {errors.phone && <p className="form-error">{errors.phone.message}</p>}
      </div>
      
      <div>
        <label htmlFor="orderType" className="form-label">Tipo de pedido</label>
        <select 
          id="orderType" 
          {...register('orderType')} 
          className="form-input"
        >
          <option value="cake">Tarta o pastel</option>
          <option value="bread">Pan especial</option>
          <option value="pastry">Bollería</option>
          <option value="other">Otro</option>
        </select>
        {errors.orderType && <p className="form-error">{errors.orderType.message}</p>}
      </div>
      
      <div>
        <label htmlFor="description" className="form-label">Descripción del pedido</label>
        <textarea 
          id="description" 
          rows={3} 
          {...register('description')} 
          className="form-input"
          placeholder="Describe tu pedido especial (sabor, tamaño, decoración, etc.)"
        />
        {errors.description && <p className="form-error">{errors.description.message}</p>}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="quantity" className="form-label">Cantidad</label>
          <input 
            id="quantity" 
            type="text" 
            {...register('quantity')} 
            className="form-input"
            placeholder="Ej: 1 tarta de 8 porciones"
          />
          {errors.quantity && <p className="form-error">{errors.quantity.message}</p>}
        </div>
        
        <div>
          <label htmlFor="date" className="form-label">Fecha de recogida</label>
          <input 
            id="date" 
            type="date" 
            {...register('date')} 
            className="form-input"
            min={new Date().toISOString().split('T')[0]}
          />
          {errors.date && <p className="form-error">{errors.date.message}</p>}
        </div>
      </div>
      
      <div>
        <label htmlFor="message" className="form-label">
          Información adicional <span className="text-gray-500">(opcional)</span>
        </label>
        <textarea 
          id="message" 
          rows={3} 
          {...register('message')} 
          className="form-input"
          placeholder="Alergias, preferencias especiales, etc."
        />
        {errors.message && <p className="form-error">{errors.message.message}</p>}
      </div>
      
      <button 
        type="submit" 
        className="btn btn-primary w-full md:w-auto md:px-8" 
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Enviando...' : 'Enviar pedido'}
      </button>
    </form>
  );
};

export default OrderForm;