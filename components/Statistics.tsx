'use client';
import { Subtitle } from '@/ui/Subtitle';
import { Text } from '@/ui/Text';
import {
  animate,
  motion,
  useMotionValue,
  useTransform,
  useInView,
} from 'motion/react';
import { useEffect, useRef } from 'react';
import { IoPaw } from 'react-icons/io5';
import { FaHandHoldingHeart } from 'react-icons/fa';
import { BsFillBuildingFill } from 'react-icons/bs';
import { HiMiniUsers } from 'react-icons/hi2';

export const Statistics = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Osobne motion values dla każdej statystyki
  const adoptionsCount = useMotionValue(0);
  const fundraisersCount = useMotionValue(0);
  const organizationsCount = useMotionValue(0);
  const volunteersCount = useMotionValue(0);

  // Osobne transformed values
  const adoptionsRounded = useTransform(() => Math.round(adoptionsCount.get()));
  const fundraisersRounded = useTransform(() =>
    Math.round(fundraisersCount.get())
  );
  const organizationsRounded = useTransform(() =>
    Math.round(organizationsCount.get())
  );
  const volunteersRounded = useTransform(() =>
    Math.round(volunteersCount.get())
  );

  useEffect(() => {
    if (!isInView) return;

    const adoptionsControls = animate(adoptionsCount, 143, { duration: 3 });
    const fundraisersControls = animate(fundraisersCount, 89, { duration: 4 });
    const organizationsControls = animate(organizationsCount, 53, {
      duration: 5,
    });
    const volunteersControls = animate(volunteersCount, 413, { duration: 6 });

    return () => {
      adoptionsControls.stop();
      fundraisersControls.stop();
      organizationsControls.stop();
      volunteersControls.stop();
    };
  }, [
    isInView,
    adoptionsCount,
    fundraisersCount,
    organizationsCount,
    volunteersCount,
  ]);

  return (
    <>
      <Subtitle subtitle="Pomogliśmy już wielu zwierzakom!" />
      <Text text="Dzięki waszej i naszej pracy osiągneliśmy bardzo wiele! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam atque aut dicta eos impedit laudantium non quisquam reprehenderit velit?" />
      <div className="bg-dark sharpness text-light mt-8 py-10" ref={ref}>
        <div className="flex items-start justify-around">
          {/* Adoptowane zwierzęta */}
          <div className="bg-dark flex flex-1 flex-col items-center justify-start gap-x-2">
            <div className="flex h-24 items-center justify-center gap-x-2">
              <IoPaw className="bg-semi-dark h-12 w-12 rounded-full p-2" />
              <motion.pre className="mb-2 text-6xl">
                {adoptionsRounded}
              </motion.pre>
            </div>
            <p className="text-light/90 font-secondary mb-2 flex h-16 px-2 text-center text-lg tracking-widest uppercase lg:text-xl">
              adoptowanych zwierząt
            </p>
          </div>

          {/* Udane zbiórki */}
          <div className="bg-dark flex flex-1 flex-col items-center justify-start gap-x-2">
            <div className="flex h-24 items-center justify-center gap-x-2">
              <FaHandHoldingHeart className="bg-semi-dark h-12 w-12 rounded-full p-2" />
              <motion.pre className="mb-2 text-6xl">
                {fundraisersRounded}
              </motion.pre>
            </div>
            <p className="text-light/90 font-secondary mb-2 flex h-16 px-2 text-center text-lg tracking-widest uppercase lg:text-xl">
              udanych zbiórek
            </p>
          </div>

          {/* Aktywne organizacje */}
          <div className="bg-dark flex flex-1 flex-col items-center justify-start gap-x-2">
            <div className="flex h-24 items-center justify-center gap-x-2">
              <BsFillBuildingFill className="bg-semi-dark h-12 w-12 rounded-full p-2" />
              <motion.pre className="mb-2 text-6xl">
                {organizationsRounded}
              </motion.pre>
            </div>
            <p className="text-light/90 font-secondary mb-2 flex h-16 px-2 text-center text-lg tracking-widest uppercase lg:text-xl">
              aktywnych organizacji
            </p>
          </div>

          {/* Wolontariusze */}
          <div className="bg-dark flex flex-1 flex-col items-center justify-start gap-x-2">
            <div className="flex h-24 items-center justify-center gap-x-2">
              <HiMiniUsers className="bg-semi-dark h-12 w-12 rounded-full p-2" />
              <motion.pre className="mb-2 text-6xl">
                {volunteersRounded}
              </motion.pre>
            </div>
            <p className="text-light/90 font-secondary mb-2 flex h-16 px-2 text-center text-lg tracking-widest uppercase lg:text-xl">
              wolontariuszy
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
