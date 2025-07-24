export const Text = ({ text }: { text: string }) => {
  return (
    <p className="text-dark mb-6 text-lg tracking-wide lg:mb-10 lg:text-xl">
      {text}
    </p>
  );
};
