import { Title } from '@/ui/Title';
import { Text } from '@/ui/Text';
import { Subtitle } from '@/ui/Subtitle';

export default function HowToHelpPage() {
  return (
    <div className="text-dark">
      <Title title="Jak pomóc" />
      <Text text="Schronisko dla Zwierząt w Łodzi nie jest organizacją pożytku publicznego i nie może przyjmować 1,5% podatku." />
      <Text text="Jeśli chcesz wesprzeć schronisko finansowo, prosimy o wpłaty na konto:" />

      <div className="mb-4 font-semibold">
        <p>📌 45 1240 1037 1111 0011 0911 8243</p>
        <p>
          z dopiskiem: <span className="italic">Darowizna na Schronisko</span>
        </p>
      </div>

      <Subtitle subtitle="Darowizny rzeczowe" />
      <Text text="Jeśli chcesz obdarować naszych podopiecznych, najbardziej potrzebujemy:" />
      <ul className="mb-6 list-disc pl-5">
        <li>mokrej i suchej karmy dobrej jakości dla psów i kotów</li>
        <li>mokrej karmy dla psich seniorów</li>
        <li>mokrej karmy dla szczeniaków</li>
        <li>karm specjalistycznych (nerki, wątroba, przewód pokarmowy)</li>
        <li>przysmaków dla psów i kotów</li>
        <li>koców – bardzo potrzebne!</li>
      </ul>

      <Text text="❗ Nie przyjmujemy: kołder, poduszek, materacy, gąbek, dywanów, wykładzin, śpiworów, odzieży." />

      <Subtitle subtitle="Darowizny pieniężne – konta celowe" />
      <Text text="Można również przekazać wsparcie na konkretne potrzeby naszych zwierząt:" />

      <ul className="mb-10 list-none pl-0">
        <li>
          <span className="font-semibold">
            🏦 45 1240 1037 1111 0011 0911 8243
          </span>{' '}
          – Darowizny ogólne
        </li>
        <li>
          <span className="font-semibold">
            🏦 82 1240 1037 1111 0011 0911 8256
          </span>{' '}
          – Karma i leczenie
        </li>
        <li>
          <span className="font-semibold">
            🏦 75 1240 1037 1111 0011 0911 8285
          </span>{' '}
          – Wyposażenie
        </li>
        <li>
          <span className="font-semibold">
            🏦 38 1240 1037 1111 0011 0911 8272
          </span>{' '}
          – Adopcje wirtualne
        </li>
      </ul>

      <Text text="Dziękujemy za każde wsparcie – to realna pomoc dla naszych podopiecznych." />
    </div>
  );
}
