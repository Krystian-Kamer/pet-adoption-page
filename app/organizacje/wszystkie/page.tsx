import { Title } from '@/ui/Title';
import { organizations } from '@/organizations';
import { Card } from '@/ui/Card';
import { Subtitle } from '@/ui/Subtitle';
import Link from 'next/link';

export default function OrganisationsAllPage() {
  return (
    <div>
      <Title title="Organizacje wszystkie" />
      <div className="my-20 grid grid-cols-1 place-items-center gap-4">
        {organizations.map((org) => {
          return (
            <Card key={org.id}>
              <div className="flex w-full flex-col gap-4 md:flex-row">
                <img
                  src={org.logoUrl}
                  alt=""
                  className="h-96 w-96 object-cover"
                />
                <div className="w-full p-6">
                  <Subtitle subtitle={org.name} />
                  <p>{org.city}</p>
                  <p>{org.phoneNumber}</p>
                  <p>{org.description}</p>
                  <p className="font-bold">Godziny otwarcia</p>
                  <p>poniedziałek – środa: 9:00 – 16:00</p>
                  <p>czwartek – piątek: 9:00 – 18:00</p>
                  <p>sobota – niedziela: 9:00 – 16:00</p>
                  <div className="grid grid-cols-3 gap-4">
                    <Link
                      href="/zwierzaki/zwierzeta-do-adopcji"
                      className="bg-dark text-light p-2"
                    >
                      do adopcji
                    </Link>
                    <Link
                      href="/zwierzaki/zwierzeta-do-adopcji"
                      className="bg-dark text-light p-2"
                    >
                      zagubione
                    </Link>
                    <Link
                      href="/zwierzaki/zwierzeta-do-adopcji"
                      className="bg-dark text-light p-2"
                    >
                      znalezione
                    </Link>
                    <Link
                      href="/zwierzaki/zwierzeta-do-adopcji"
                      className="bg-dark text-light p-2"
                    >
                      aktualności
                    </Link>
                    <Link
                      href="/zwierzaki/zwierzeta-do-adopcji"
                      className="bg-dark text-light p-2"
                    >
                      zbiórki
                    </Link>
                    <Link
                      href="/zwierzaki/zwierzeta-do-adopcji"
                      className="bg-dark text-light p-2"
                    >
                      wolontariat
                    </Link>
                  </div>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
