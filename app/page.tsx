import { Title } from '@/ui/Title';
import { Subtitle } from '@/ui/Subtitle';
import { Text } from '@/ui/Text';
import Link from 'next/link';
import { RecentlyAddedAnimals } from '@/components/animal/RecentlyAddedAnimals';
import { Statistics } from '@/components/Statistics';

export default function Home() {
  const divider = <div className="bg-dark my-20 h-[1px] w-full"></div>;

  const ourMission = (
    <div>
      <Subtitle subtitle="Nasza misja" />
      <Text text="Na naszym portalu możesz znaleźć dla siebie idealnego przyjaciela." />
      <Text text="Każdego dnia do schronisk trafiają nowe zwierzęta." />
      <Text text="Naszym zadaniem jest przede wszystkim pomoc zwierzętom, czy to poprzez adopcję czy inne działania." />
    </div>
  );

  const helpAlternatives = (
    <div>
      <Subtitle subtitle="Jeśli nie możesz adoptować, pomóż inaczej" />
      <Text text="Adopcja to nie jedyny sposób na wsparcie zwierząt – każda pomoc jest cenna i może zmienić ich życie na lepsze." />
      <Text text="Możesz pomóc, angażując się w wolontariat, uczestnicząc w zbiórkach finansowych lub rzeczowych, a także udostępniając informacje o zwierzętach w potrzebie." />
      <Text text="Tworząc i wspierając społeczność, dajesz zwierzętom większą szansę na znalezienie nowego domu i poprawę ich warunków życia." />
    </div>
  );

  const foundAnimalGuide = (
    <div>
      <Subtitle subtitle="Znalazłem zwierzę, co robić" />
      <Text text="Jeśli tylko pozwalają na to warunki, postaraj się przetrzymać zwierzę jakiś czas w domu i podejmij próby odnalezienia jego właściciela." />
      <Text text="Być może uda się spotkać właściciela, który szuka zwierzaka w rejonie, w którym zaginął." />
      <Text text="Bardzo skuteczne okazuje się rozwieszanie plakatów (w dozwolonych miejscach) informujących o znalezieniu zwierzęcia. Na plakacie koniecznie należy umieścić zdjęcie i kontakt telefoniczny do znalazcy." />
      <Text text="Znalezione zwierzę warto ogłaszać również w internecie na portalach tematycznych, a także umieścić ogłoszenie na stronie schroniska." />
      <Text text="Ze znalezionym zwierzakiem warto też udać się do najbliższej lecznicy weterynaryjnej, gdzie należy sprawdzić, czy posiada czip. W takim przypadku natychmiast można powiadomić właściciela." />
      <Text text="Jeśli nie ma możliwości przetrzymania zwierzęcia w domu do momentu odnalezienia właściciela lub znalezienia nowego domu, należy powiadomić Animal Patrol Straży Miejskiej w Łodzi, tel. 986 (całodobowy)." />
      <p>
        Sprawdź też naszą sekcję -{' '}
        <Link href="/zwierzeta-znalezione">zwierzęta znalezione</Link>.
      </p>
    </div>
  );

  const lostAnimalGuide = (
    <div>
      <Subtitle subtitle="Zgubiłem zwierzę, co robić" />
      <Text text="Bardzo ważne są poszukiwania psa/kota w okolicy, gdzie zaginął, gdzie był ostatni raz widziany." />
      <Text text="Warto rozklejać plakaty (w dozwolonych miejscach), na których zamieszczone będzie wyraźne zdjęcie, opis zwierzaka i kontakt telefoniczny do właściciela." />
      <Text text="Jak najszybciej należy sprawdzić, czy zwierzę znajduje się w schronisku. Wizytówki wszystkich zwierząt, które trafiają do schroniska, opublikowane są na naszej stronie." />
      <Text text="Warto zamieścić ogłoszenia na forach i portalach internetowych, załączając zdjęcie zwierzaka, opis kiedy i gdzie zaginął oraz kontakt do poszukującego właściciela." />

      <Text text="Do zapamiętania:" />
      <Text text="1. Poszukiwania w miejscu zaginięcia oraz w okolicy." />
      <Text text="2. Wieszanie ogłoszeń (w dozwolonych miejscach) w okolicy, gdzie zaginął zwierzak." />
      <Text text="3. Sprawdzanie na naszej stronie internetowej, czy zwierzę jest w schronisku." />
      <Text text="4. Zamieszczanie ogłoszeń o zaginięciu (wyraźne zdjęcie, informacja kiedy i gdzie zaginął zwierzak, kontakt telefoniczny do właściciela) w internecie oraz przeglądanie ogłoszeń zamieszczonych przez osoby, które znalazły zwierzaki." />
      <Text text="5. Zamieszczenie ogłoszenia na stronie schroniska (zakładka)." />

      <p>
        Sprawdź też naszą sekcję -{' '}
        <Link href="/zwierzeta-zagubione">zwierzęta zagubione</Link>.
      </p>
    </div>
  );

  const volunteerSection = (
    <div>
      <Subtitle subtitle="Zostań wolontariuszem" />
      <Text text="W Schronisku dla Zwierząt w Łodzi funkcjonuje wolontariat w zakresie pracy z psami lub kotami." />
      <Text text="Wolontariat odbywa się na terenie i w godzinach pracy schroniska." />
      <Text text="Do zadań i obowiązków wolontariuszy należy m.in.:" />
      <Text text="• dbanie o dobro zwierząt przebywających w schronisku" />
      <Text text="• spacery z psami" />
      <Text text="• socjalizacja zwierząt" />
      <Text text="• pielęgnacja zwierząt" />
      <Text text="• wspomaganie opieki weterynaryjnej" />
      <Text text="• wykonywanie prac porządkowych oraz innych czynności zależnych od bieżących potrzeb schroniska" />
      <Text text="• wspomaganie obsługi procedury adopcji" />
      <Text text="• promocja działalności schroniska w przestrzeni publicznej." />

      <Text text="Obecnie w schronisku działa aktywnie 25 wolontariuszy. Liczba wolontariuszy uwzględniająca zapotrzebowanie i możliwości schroniska (m.in. infrastruktura, aktualna liczba zwierząt) określana jest zarządzeniami dyrektora schroniska." />

      <Text text="Nabory do wolontariatu uzależnione są od zapotrzebowania i aktualnej sytuacji w schronisku." />
      <Text text="Wolontariuszem może zostać tylko osoba pełnoletnia." />

      <Text text="Osoby zainteresowane wolontariatem proszone są o kontakt ze schroniskiem." />
      <Text text="Wymagania:" />
      <Text text="• ukończone 18 lat" />
      <Text text="• dyspozycyjność w tygodniu" />
      <Text text="• możliwość regularnych wizyt w schronisku" />
      <Text text="• zaangażowanie, odpowiedzialność" />
      <Text text="• umiejętność pracy w grupie" />
      <Text text="• zdolność radzenia sobie ze stresem" />
      <Text text="• doświadczenie w opiece nad zwierzętami" />

      <Text text="Schronisko skontaktuje się z wybranymi osobami." />

      <p>
        Sprawdź też naszą sekcję - <Link href="/wolontariat">Wolontariat</Link>.
      </p>
    </div>
  );

  const registrationBenefits = (
    <div>
      <Subtitle subtitle="Co zyskasz po zarejestrowaniu?" />
      <Text text="Rejestracja na naszym portalu to pierwszy krok do realnej pomocy zwierzętom oraz zyskania dostępu do wielu funkcji, które ułatwią Ci zaangażowanie." />
      <Text text="Oto, co zyskasz:" />
      <Text text="1. Możliwość dodawania własnych zbiórek i aktualności, by informować społeczność o ważnych wydarzeniach i potrzebach." />
      <Text text="2. Dostęp do pełnej bazy zwierząt dostępnych do adopcji oraz możliwość zgłaszania znalezionych lub zagubionych zwierząt." />
      <Text text="3. Możliwość nawiązywania kontaktu z organizacjami oraz innymi użytkownikami zaangażowanymi w pomoc zwierzętom." />
      <Text text="4. Szansa na udział w wolontariacie i koordynowanie działań na rzecz schronisk." />
      <Text text="5. Indywidualny panel użytkownika do zarządzania swoimi zgłoszeniami i danymi." />
    </div>
  );

  const partnersSection = (
    <div>
      <Subtitle subtitle="Organizacje współpracujące z portalem <3" />
      <Text text="Lista organizacji" />
      <p className="mb-[300px]">Opinie adopcyjnych rodzin/historie sukcesu</p>
    </div>
  );

  return (
    <div className="text-dark">
      <Title title="Adoptuj. Pomagaj. Zmieniaj świat." />
      {ourMission}
      {divider}
      {helpAlternatives}
      {divider}
      <Statistics />
      {divider}
      {foundAnimalGuide}
      {divider}
      {lostAnimalGuide}
      {divider}
      <RecentlyAddedAnimals />
      {divider}
      {volunteerSection}
      {divider}
      {registrationBenefits}
      {divider}
      {partnersSection}
    </div>
  );
}
