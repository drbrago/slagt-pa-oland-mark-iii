import { ReactNode } from "react";

type Props = {
  header: string;
  children: ReactNode | ReactNode[];
};

export const Header = ({ header, children }: Props) => {
  return (
    <header
      className="relative w-full text-albescent-white-100"
      style={{
        backgroundImage: "url('/slakt-pa-oland-mark-iii/start-hero.png')",
        backgroundSize: "cover",
        backgroundPosition: "50% 23%",
      }}
    >
      <div className="absolute inset-0 bg-blood/90"></div>
      <div className="relative px-6 py-10">
        <div className="mx-auto max-w-[65ch] lg:max-w-none lg:text-center">
          <h1 className="tracking-wide font-logo text-4xl md:text-6xl lg:text-8xl font-bold mb-4">
            {header}
          </h1>
        </div>
        <div className="mx-auto max-w-[65ch]">{children}</div>
      </div>
    </header>
  );
};
