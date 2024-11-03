export const Footer = () => {
  return (
    <div className="flex justify-between items-center max-w-[1480px] w-full py-2 px-5 text-neutral-600">
      <span>Tanziqly's Shop</span>
      <div className="flex gap-1 items-center">
        Made by
        <a
          className="underline text-primary"
          href="https://github.com/tanziqly"
        >
          tanziqly
        </a>
      </div>
    </div>
  );
};
