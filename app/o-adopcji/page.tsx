import { Title } from '@/ui/Title';
import { Text } from '@/ui/Text';
import { Subtitle } from '@/ui/Subtitle';

export default function AboutAdoptionPage() {
  return (
    <div className="text-dark">
      <Title title="O adopcji" />
      <Subtitle subtitle="Regulamin adopcji psa" />
      <Text text="Adoptować zwierzę może wyłącznie osoba pełnoletnia." />
      <Text text="Do adopcji wydawane są psy z kompletem szczepień, mikroczipem i po zabiegu kastracji (z wyjątkiem bardzo młodych lub będących w leczeniu)." />
      <Text text="Przed wizytą należy wypełnić i odesłać ankietę przedadopcyjną (mailowo: schronisko.adopcje@jst.uml.lodz.pl lub osobiście)." />
      <Text text="Wizyty są umawiane po przesłaniu wypełnionej ankiety." />

      <ul className="mb-6 list-disc pl-5">
        <li>
          Brak wybranego psa – schronisko proponuje kandydata zgodnie z
          oczekiwaniami z ankiety.
        </li>
        <li>
          Przed adopcją zalecane jest zapoznanie z psem w obecności pracownika
          lub wolontariusza.
        </li>
        <li>
          Dla psów wymagających socjalizacji – więcej spacerów zapoznawczych.
        </li>
        <li>
          Jeśli w domu jest pies rezydent – obowiązkowy spacer zapoznawczy pod
          nadzorem schroniska.
        </li>
        <li>Schronisko może przeprowadzić wizytę przedadopcyjną.</li>
        <li>
          Psy wydawane są wyłącznie do warunków domowych – schronisko zastrzega
          sobie prawo do odmowy adopcji.
        </li>
      </ul>

      <Text text="W dniu adopcji należy mieć ze sobą:" />
      <ul className="mb-6 list-disc pl-5">
        <li>
          dowód osobisty, paszport lub inny dokument ze zdjęciem i numerem PESEL
        </li>
        <li>obrożę lub szelki, smycz (nie typu flexi)</li>
        <li>w przypadku transportu komunikacją miejską – kaganiec</li>
        <li>75 zł – opłata adopcyjna</li>
      </ul>

      <Text text="📄 Ankieta przedadopcyjna – pies (.docx): prześlij na schronisko.adopcje@jst.uml.lodz.pl" />

      <Subtitle subtitle="Regulamin adopcji kota" />
      <Text text="Adoptować kota może wyłącznie osoba pełnoletnia." />
      <Text text="Koty są wydawane z kompletem szczepień, mikroczipem i po zabiegu kastracji (z wyjątkiem bardzo młodych lub będących w leczeniu)." />
      <Text text="Przed wizytą należy wypełnić i odesłać ankietę przedadopcyjną (mailowo: schronisko.adopcje@jst.uml.lodz.pl lub osobiście)." />
      <Text text="Wizyty są umawiane po przesłaniu wypełnionej ankiety." />

      <ul className="mb-6 list-disc pl-5">
        <li>Wizyta w kociarni – poznanie kotów i wybór jednego z nich.</li>
        <li>
          Wybrany kot może zostać zarezerwowany – odbiór maksymalnie 7 dni po
          wizycie.
        </li>
        <li>Schronisko może przeprowadzić wizytę przedadopcyjną.</li>
        <li>Schronisko zastrzega sobie prawo do odmowy adopcji.</li>
      </ul>

      <Text text="W dniu adopcji należy mieć ze sobą:" />
      <ul className="mb-6 list-disc pl-5">
        <li>
          dowód osobisty, paszport lub inny dokument ze zdjęciem i numerem PESEL
        </li>
        <li>
          transporter (kot nie może być odbierany w kartonie, na rękach lub
          uszkodzonym transporterze)
        </li>
        <li>55 zł – opłata adopcyjna</li>
      </ul>

      <Text text="📄 Ankieta przedadopcyjna – kot (.docx): prześlij na schronisko.adopcje@jst.uml.lodz.pl" />

      <Subtitle subtitle="Kontakt w sprawie adopcji" />
      <ul className="mb-6 list-none pl-0">
        <li>📞 500 099 995</li>
        <li>📞 501 437 232</li>
        <li>📞 42 656 78 42</li>
        <li>📧 schronisko.adopcje@jst.uml.lodz.pl</li>
      </ul>

      <Subtitle subtitle="Godziny otwarcia schroniska" />
      <ul className="mb-10 list-none pl-0">
        <li>🕗 Poniedziałek – Środa: 08:00 – 16:00</li>
        <li>🕗 Czwartek – Piątek: 08:00 – 18:00</li>
        <li>🕗 Sobota – Niedziela: 08:00 – 16:00</li>
      </ul>
    </div>
  );
}
