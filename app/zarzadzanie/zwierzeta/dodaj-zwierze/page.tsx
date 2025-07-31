'use client';

import { useForm } from 'react-hook-form';
import { Title } from '@/ui/Title';
import { useState } from 'react';

type ImageFile = {
  file: File;
  preview: string;
  id: string;
};

export default function AddFundraiserPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [images, setImages] = useState<ImageFile[]>([]);

  const onSubmit = async (data: any) => {
    const formData = new FormData();

    formData.append('name', data.name);
    formData.append('species', data.species);
    formData.append('gender', data.gender);
    formData.append('age', data.age);
    formData.append('chipNumber', data.chipNumber);
    formData.append('organization', data.organization);
    formData.append('phoneNumber', data.phoneNumber);
    formData.append('description', data.description);
    if (data.city) formData.append('city', data.city);
    if (data.status) formData.append('status', data.status);
    if (data.dateOfAdmission)
      formData.append('dateOfAdmission', data.dateOfAdmission);

    // Dodajemy wszystkie zdjęcia z aktualnej listy:
    images.forEach((img) => {
      formData.append('images', img.file);
    });

    try {
      const res = await fetch('/api/animals', {
        method: 'POST',
        body: formData,
      });

      if (!res.ok) throw new Error('Błąd podczas wysyłania');

      console.log('Zwierzę dodane');
      reset();
      setImages([]);
    } catch (err) {
      console.error(err);
    }
  };

  const handleFilesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const newImages: ImageFile[] = Array.from(e.target.files).map((file) => ({
      file,
      preview: URL.createObjectURL(file),
      id: crypto.randomUUID(),
    }));

    setImages((current) => [...current, ...newImages]);
  };

  const removeImage = (id: string) => {
    setImages((current) => current.filter((img) => img.id !== id));
  };

  const moveImage = (index: number, direction: 'left' | 'right') => {
    setImages((current) => {
      const newImages = [...current];
      const swapIndex = direction === 'left' ? index - 1 : index + 1;
      if (swapIndex < 0 || swapIndex >= newImages.length) return newImages;
      [newImages[index], newImages[swapIndex]] = [
        newImages[swapIndex],
        newImages[index],
      ];
      return newImages;
    });
  };

  return (
    <div className="mx-auto max-w-3xl py-10">
      <Title title="Dodaj zwierzę" />
      <hr className="mb-5" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        encType="multipart/form-data"
        className="flex flex-col gap-4"
      >
        <div>
          <label htmlFor="name" className="mb-1 block font-medium">
            Imię
          </label>
          <input
            id="name"
            type="text"
            {...register('name', { required: 'To pole jest wymagane' })}
            className="w-full rounded border bg-white px-3 py-2"
          />
          {errors.name && (
            <p className="text-sm text-red-500">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="species" className="mb-1 block font-medium">
            Gatunek
          </label>
          <select
            id="speies"
            {...register('species', { required: 'Wybierz gatunek' })}
            className="w-full rounded border bg-white px-3 py-2"
          >
            <option value="">-- wybierz --</option>
            <option value="dog">Pies</option>
            <option value="cat">Kot</option>
          </select>
          {errors.species && (
            <p className="text-sm text-red-500">{errors.species.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="gender" className="mb-1 block font-medium">
            Płeć
          </label>
          <select
            id="gender"
            {...register('gender', { required: 'Wybierz płeć' })}
            className="w-full rounded border bg-white px-3 py-2"
          >
            <option value="">-- wybierz --</option>
            <option value="male">Samiec</option>
            <option value="female">Samica</option>
          </select>
          {errors.gender && (
            <p className="text-sm text-red-500">{errors.gender.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="age" className="mb-1 block font-medium">
            Wiek (w latach)
          </label>
          <input
            id="age"
            type="number"
            {...register('age', { required: 'Podaj wiek' })}
            className="w-full rounded border bg-white px-3 py-2"
          />
          {errors.age && (
            <p className="text-sm text-red-500">{errors.age.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="chipNumber" className="mb-1 block font-medium">
            Numer chipa
          </label>
          <input
            id="chipNumber"
            type="text"
            {...register('chipNumber', {
              required: 'Numer chipa jest wymagany',
            })}
            className="w-full rounded border bg-white px-3 py-2"
          />
          {errors.chipNumber && (
            <p className="text-sm text-red-500">{errors.chipNumber.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="organization" className="mb-1 block font-medium">
            Organizacja
          </label>
          <input
            id="organization"
            type="text"
            {...register('organization', { required: 'To pole jest wymagane' })}
            className="w-full rounded border bg-white px-3 py-2"
          />
          {errors.organization && (
            <p className="text-sm text-red-500">
              {errors.organization.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="phoneNumber" className="mb-1 block font-medium">
            Telefon
          </label>
          <input
            id="phoneNumber"
            type="text"
            {...register('phoneNumber', { required: 'Podaj numer telefonu' })}
            className="w-full rounded border bg-white px-3 py-2"
          />
          {errors.phoneNumber && (
            <p className="text-sm text-red-500">{errors.phoneNumber.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="city" className="mb-1 block font-medium">
            Miasto (opcjonalne)
          </label>
          <input
            id="city"
            type="text"
            {...register('city')}
            className="w-full rounded border bg-white px-3 py-2"
          />
        </div>

        <div>
          <label htmlFor="status" className="mb-1 block font-medium">
            Status (opcjonalnie)
          </label>
          <select
            id="status"
            {...register('status')}
            className="w-full rounded border bg-white px-3 py-2"
          >
            <option value="">-- wybierz --</option>
            <option value="adoption">Do adopcji</option>
            <option value="lost">Zaginione</option>
            <option value="found">Znalezione</option>
          </select>
        </div>

        <div>
          <label htmlFor="dateOfAdmission" className="mb-1 block font-medium">
            Data przyjęcia
          </label>
          <input
            id="dateOfAdmission"
            type="date"
            {...register('dateOfAdmission')}
            className="w-full rounded border bg-white px-3 py-2"
          />
        </div>

        <div>
          <label htmlFor="description" className="mb-1 block font-medium">
            Opis
          </label>
          <textarea
            id="description"
            {...register('description', { required: 'Opis jest wymagany' })}
            className="min-h-[120px] w-full rounded border bg-white px-3 py-2"
          />
          {errors.description && (
            <p className="text-sm text-red-500">{errors.description.message}</p>
          )}
        </div>

        {/* Zmodyfikowane pole zdjęć */}
        <div>
          <label className="mb-1 block font-medium">Zdjęcia</label>
          <input
            id="images"
            type="file"
            accept="image/*"
            multiple
            className="hidden"
            onChange={handleFilesChange}
          />
          <label
            htmlFor="images"
            className="text-dark inline-block cursor-pointer rounded border bg-white px-4 py-2 text-center hover:bg-gray-100"
          >
            Wybierz pliki
          </label>

          {images.length === 0 && (
            <p className="mt-2 text-sm text-gray-600">Nie wybrano plików</p>
          )}

          <div className="mt-4 flex flex-wrap gap-4">
            {images.map((img, idx) => (
              <div
                key={img.id}
                className="group relative h-24 w-24 overflow-hidden rounded border"
              >
                <img
                  src={img.preview}
                  alt={`Zdjęcie ${idx + 1}`}
                  className="h-full w-full object-cover"
                />
                <button
                  type="button"
                  onClick={() => removeImage(img.id)}
                  className="bg-opacity-60 absolute top-1 right-1 z-10 flex hidden h-6 w-6 items-center justify-center rounded-full bg-black text-lg font-bold text-white group-hover:block"
                  aria-label="Usuń zdjęcie"
                >
                  ×
                </button>
                <button
                  type="button"
                  onClick={() => moveImage(idx, 'left')}
                  disabled={idx === 0}
                  className="bg-opacity-60 absolute bottom-1 left-1 z-10 rounded bg-black px-1 text-xs text-white disabled:opacity-30"
                >
                  ←
                </button>
                <button
                  type="button"
                  onClick={() => moveImage(idx, 'right')}
                  disabled={idx === images.length - 1}
                  className="bg-opacity-60 absolute right-1 bottom-1 z-10 rounded bg-black px-1 text-xs text-white disabled:opacity-30"
                >
                  →
                </button>
              </div>
            ))}
          </div>
          {errors.images && (
            <p className="text-sm text-red-500">{errors.images.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="bg-dark text-light hover:bg-dark/90 mt-4 cursor-pointer rounded px-4 py-2 transition-colors"
        >
          Dodaj zwierzę
        </button>
      </form>
    </div>
  );
}
