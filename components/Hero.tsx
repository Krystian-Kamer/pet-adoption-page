export const Hero = () => {
  return (
    <div className="relative">
      <img
        src="/bg-big.jpg"
        className="h-[700px] w-full object-cover md:object-right-bottom"
        alt="zdjęcie w tle"
      />
      <h1 className="font-secondary lg:text-accent text-dark absolute top-1/4 left-1/6 max-w-[500px] text-3xl font-semibold lg:max-w-[600px] lg:text-6xl lg:font-normal">
        Portal dla zwierząt w potrzebie.
      </h1>
    </div>
  );
};
