'use client';

import { useForm } from 'react-hook-form';
import { Subtitle } from '@/ui/Subtitle';

type ContactFormData = {
  fullName: string;
  email: string;
  phone: string;
  message: string;
};

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>();

  const onSubmit = (data: ContactFormData) => {
    console.log('Wysłano formularz:', data);
    // tutaj np. wysyłka na backend
  };

  return (
    <div className="mt-10 text-center">
      <Subtitle subtitle="Skontaktuj się" />
      <hr className="mb-5" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mx-auto flex max-w-[700px] flex-col gap-4 text-left"
      >
        <div>
          <label htmlFor="fullName" className="mb-1 block font-medium">
            Imię i nazwisko
          </label>
          <input
            id="fullName"
            type="text"
            {...register('fullName', { required: 'To pole jest wymagane' })}
            className="w-full rounded border bg-white px-3 py-2"
          />
          {errors.fullName && (
            <span className="text-sm text-red-500">
              {errors.fullName.message}
            </span>
          )}
        </div>

        <div>
          <label htmlFor="email" className="mb-1 block font-medium">
            Email
          </label>
          <input
            id="email"
            type="email"
            {...register('email', {
              required: 'Email jest wymagany',
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: 'Nieprawidłowy format email',
              },
            })}
            className="w-full rounded border bg-white px-3 py-2"
          />
          {errors.email && (
            <span className="text-sm text-red-500">{errors.email.message}</span>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="mb-1 block font-medium">
            Numer telefonu
          </label>
          <input
            id="phone"
            type="tel"
            {...register('phone', { required: 'Numer telefonu jest wymagany' })}
            className="w-full rounded border bg-white px-3 py-2"
          />
          {errors.phone && (
            <span className="text-sm text-red-500">{errors.phone.message}</span>
          )}
        </div>

        <div>
          <label htmlFor="message" className="mb-1 block font-medium">
            Treść wiadomości
          </label>
          <textarea
            id="message"
            {...register('message', { required: 'Wiadomość jest wymagana' })}
            className="h-56 max-h-56 min-h-56 w-full rounded border bg-white px-3 py-2"
          />
          {errors.message && (
            <span className="text-sm text-red-500">
              {errors.message.message}
            </span>
          )}
        </div>

        <button
          type="submit"
          className="bg-dark text-light hover:bg-dark/90 mt-4 cursor-pointer rounded px-4 py-2 transition-colors"
        >
          Wyślij
        </button>
      </form>
    </div>
  );
}
