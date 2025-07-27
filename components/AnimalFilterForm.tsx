import { FiSearch } from 'react-icons/fi';

type Option = { value: string; label: string };
type Props = {
  speciesOptions?: Option[];
  cityOptions?: Option[];
  genderOptions?: Option[];
  showNameField?: boolean;
  onSubmit?: (formData: FormData) => void;
};

export default function AnimalFilterForm({
  speciesOptions = [],
  cityOptions = [],
  genderOptions = [],
  showNameField = true,
  onSubmit,
}: Props) {
  return (
    <div className="sharpness mb-20 w-full bg-white p-4 shadow-lg shadow-black/30">
      <form
        className="font-primary grid grid-cols-1 gap-x-2 gap-y-2 text-lg sm:grid-cols-2 xl:h-10 xl:grid-cols-6"
        action={onSubmit}
      >
        <label
          htmlFor="species-select"
          className="relative flex h-full cursor-pointer items-center gap-2"
        >
          <select
            id="species-select"
            name="species"
            defaultValue=""
            className="border-semi-dark/20 focus:border-semi-dark/70 h-full w-full appearance-none border-1 bg-transparent px-4 outline-none"
          >
            <option value="" disabled>
              Zwierzę
            </option>
            <option value="all">Każde</option>
            <option value="cat">Kot</option>
            <option value="dog">Pies</option>
          </select>
          <span className="text-dark pointer-events-none absolute top-1/2 right-3 -translate-y-1/2">
            ▼
          </span>
        </label>

        <label
          htmlFor="city-select"
          className="relative flex h-full w-full cursor-pointer items-center"
        >
          <select
            id="city-select"
            name="city"
            defaultValue=""
            className="border-semi-dark/20 focus:border-semi-dark/70 h-full w-full appearance-none border-1 bg-transparent px-4 outline-none"
          >
            <option value="" disabled>
              Miasto
            </option>
            {cityOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          <span className="text-dark pointer-events-none absolute top-1/2 right-3 -translate-y-1/2">
            ▼
          </span>
        </label>

        <label
          htmlFor="age-select"
          className="relative flex h-full w-full cursor-pointer items-center"
        >
          <select
            id="age-select"
            name="age"
            defaultValue=""
            className="border-semi-dark/20 focus:border-semi-dark/70 h-full w-full appearance-none border-1 bg-transparent px-4 outline-none"
          >
            <option value="" disabled>
              Wiek
            </option>
            <option value="all">Bez znaczenia</option>
            <option value="0-2">Poniżej 2 lat</option>
            <option value="3-6">3-6 lat</option>
            <option value="7-10">7-10 lat</option>
            <option value="10+">Powyżej 10 lat</option>
          </select>
          <span className="text-dark pointer-events-none absolute top-1/2 right-3 -translate-y-1/2">
            ▼
          </span>
        </label>

        <label
          htmlFor="gender-select"
          className="relative flex h-full w-full cursor-pointer justify-between"
        >
          <select
            id="gender-select"
            name="gender"
            defaultValue=""
            className="border-semi-dark/20 focus:border-semi-dark/70 h-full w-full appearance-none border-1 bg-transparent px-4 outline-none"
          >
            <option value="" disabled>
              Płeć
            </option>
            <option value="all">Bez znaczenia</option>
            <option value="male">On</option>
            <option value="female">Ona</option>
          </select>
          <span className="text-dark pointer-events-none absolute top-1/2 right-3 -translate-y-1/2">
            ▼
          </span>
        </label>

        {showNameField && (
          <label className="flex h-full items-center">
            <span className="sr-only">Imię</span>
            <input
              type="text"
              name="name"
              placeholder="Imię"
              className="border-semi-dark/20 focus:border-semi-dark/70 h-full w-full appearance-none border-1 bg-transparent px-4 py-1 outline-none sm:py-0"
            />
          </label>
        )}

        <button
          type="submit"
          className="bg-dark text-light hover:bg-dark/90 flex cursor-pointer items-center justify-center border py-1 transition sm:py-0"
        >
          Szukaj
        </button>
      </form>
    </div>
  );
}
