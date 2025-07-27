import { Title } from '@/ui/Title';
import { Text } from '@/ui/Text';
import { Subtitle } from '@/ui/Subtitle';
export default function VolunteeringPage() {
  return (
    <div className="text-dark">
      <Title title="Wolontariat" />
      <Subtitle subtitle="Wolontariat w Schronisku dla Zwierząt w Łodzi" />

      <Text text="W schronisku funkcjonuje wolontariat dedykowany pracy z psami oraz kotami. Działania prowadzone są na terenie schroniska, w godzinach jego pracy." />

      <Subtitle subtitle="Zakres obowiązków wolontariusza:" />
      <ul className="mb-6 list-disc pl-5">
        <li>dbanie o dobro zwierząt przebywających w schronisku</li>
        <li>spacery z psami</li>
        <li>socjalizacja zwierząt</li>
        <li>pielęgnacja zwierząt</li>
        <li>wspomaganie opieki weterynaryjnej</li>
        <li>
          prace porządkowe oraz inne czynności zależne od potrzeb schroniska
        </li>
        <li>wspomaganie obsługi procedury adopcyjnej</li>
        <li>promocja działalności schroniska w przestrzeni publicznej</li>
      </ul>

      <Text text="Obecnie aktywnie działa 25 wolontariuszy. Docelowa liczba osób zaangażowanych w wolontariat jest uzależniona od zapotrzebowania oraz możliwości placówki, takich jak infrastruktura czy liczba zwierząt." />

      <Subtitle subtitle="Rekrutacja i wymagania" />
      <Text text="Nabory są organizowane w zależności od bieżącej sytuacji w schronisku. Wolontariuszem może zostać wyłącznie osoba pełnoletnia." />

      <Text text="Osoby zainteresowane prosimy o kontakt: schronisko.wolontariat@jst.uml.lodz.pl" />

      <Subtitle subtitle="Jak dołączyć?" />
      <Text text="Aby przystąpić do naboru, należy zapoznać się z Regulaminem Wolontariatu oraz dostarczyć wypełniony Kwestionariusz Osobowy Kandydata na Wolontariusza (plik .docx)." />
      <Text text="Formularz można przesłać e-mailowo na adres schronisko.wolontariat@jst.uml.lodz.pl lub dostarczyć osobiście do schroniska." />

      <Text text="Wymagania dla kandydatów:" />
      <ul className="mb-6 list-disc pl-5">
        <li>ukończone 18 lat</li>
        <li>dyspozycyjność w tygodniu</li>
        <li>regularna obecność w schronisku</li>
        <li>zaangażowanie i odpowiedzialność</li>
        <li>umiejętność pracy zespołowej</li>
        <li>radzenie sobie ze stresem</li>
        <li>doświadczenie w opiece nad zwierzętami</li>
      </ul>

      <Text text="Schronisko skontaktuje się wyłącznie z wybranymi kandydatami." />

      <Subtitle subtitle="Szkolenia i umowa" />
      <Text text="Szkolenia odbywają się na miejscu, w godzinach:" />
      <ul className="mb-6 list-disc pl-5">
        <li>poniedziałek – środa: 9:00 – 16:00</li>
        <li>czwartek – piątek: 9:00 – 18:00</li>
        <li>sobota – niedziela: 9:00 – 16:00</li>
      </ul>

      <Text text="Po ukończeniu szkolenia zawierana jest umowa o wolontariat na okres 12 miesięcy (wzór stanowi Załącznik nr 2 do Regulaminu Wolontariatu)." />

      <p className="mt-6 mb-20">Więcej informacji znajdziesz w sekcji .</p>
    </div>
  );
}
