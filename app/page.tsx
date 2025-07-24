import { Title } from '@/ui/Title';
import { Subtitle } from '@/ui/Subtitle';
import { Text } from '@/ui/Text';
import { ShortAdoptionForm } from '@/components/ShortAdoptionForm';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="text-dark">
      <Title title="Adoptuj. Pomagaj. Zmieniaj świat." />
      <Subtitle
        subtitle="Znajdź przyjaciela na całe życie i pomóż tym, którzy najbardziej tego
        potrzebują."
      />
      <ShortAdoptionForm />
      <Subtitle subtitle="Nasza misja" />
      <Text
        text=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus
        amet cumque, dolor dolorum earum eius ipsa, ipsum non obcaecati officiis
        omnis, optio perspiciatis ratione soluta suscipit temporibus vero.
        Corporis et illo illum inventore iste molestiae praesentium quia
        reiciendis voluptates?"
      />
      <Subtitle subtitle="Znalazłem zwierzę, co robić" />
      <Text
        text=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus
        amet cumque, dolor dolorum earum eius ipsa, ipsum non obcaecati officiis
        omnis, optio perspiciatis ratione soluta suscipit temporibus vero.
        Corporis et illo illum inventore iste molestiae praesentium quia
        reiciendis voluptates?"
      />
      <p className="mb-10">
        Sprawdź też naszą sekcję -{' '}
        <Link href="/zwierzeta-znalezione">zwierzęta znalezione</Link>.
      </p>
      <Subtitle subtitle="Zgubiłem zwierzę, co robić" />
      <Text
        text=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus
        amet cumque, dolor dolorum earum eius ipsa, ipsum non obcaecati officiis
        omnis, optio perspiciatis ratione soluta suscipit temporibus vero.
        Corporis et illo illum inventore iste molestiae praesentium quia
        reiciendis voluptates?"
      />
      <Text
        text=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus
        amet cumque, dolor dolorum earum eius ipsa, ipsum non obcaecati."
      />
      <p className="mb-10">
        Sprawdź też naszą sekcję -{' '}
        <Link href="/zwierzeta-zagubione">zwierzęta zagubione</Link>.
      </p>
      <Subtitle subtitle="Zostań wolontariuszem" />
      <Text
        text=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus
        amet cumque, dolor dolorum earum eius ipsa, ipsum non obcaecati officiis
        omnis, optio perspiciatis ratione soluta suscipit temporibus vero.
        Corporis et illo illum inventore iste molestiae praesentium quia
        reiciendis voluptates?"
      />
      <Text
        text=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus
        amet cumque, dolor dolorum earum eius ipsa, ipsum non obcaecati."
      />
      <p className="mb-10">
        Sprawdź też naszą sekcję -{' '}
        <Link href="/zwierzeta-zagubione">Wolontariat</Link>.
      </p>
      <Subtitle subtitle="Co zyskasz po zarejestrowaniu?" />
      <ul className="mb-20">
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
      </ul>
      <Subtitle subtitle="Jeśli nie możesz adoptować, pomóż inaczej" />
      <Text
        text=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus
        amet cumque, dolor dolorum earum eius ipsa, ipsum non obcaecati."
      />
      <Text
        text=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus
        amet cumque, dolor dolorum earum eius ipsa, ipsum non obcaecati."
      />
      <Text
        text=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus
        amet cumque, dolor dolorum earum eius ipsa, ipsum non obcaecati."
      />
      <Subtitle subtitle="Pomogliśmy już wielu zwierzakom!" />
      <Text
        text="Zobacz  ewentualnie statystyki: ✅ 1500+
        adopcji ✅ 200+ aktywnych organizacji ✅ 400+ wolontariusz"
      />
      <div>OSTATNIO DODANE ZWIERZĘTA</div>
      <Subtitle subtitle="Organizacje współpracujące z portalem <3" />
      <Text text="Lista organizacji" />

      <p className="mb-[300px]">Opinie adopcyjnych rodzin/historie sukcesu</p>
    </div>
  );
}
