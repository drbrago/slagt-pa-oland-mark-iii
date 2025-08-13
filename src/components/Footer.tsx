import { ReactNode } from "react";

type Props = {
  children: ReactNode | ReactNode[];
};

export const Footer = ({ children }: Props) => {
  return (
    <footer className="relative w-full mt-12 text-albescent-white-100">
      <div
        className="relative h-[60vh] md:h-[75vh] w-full px-6"
        style={{
          backgroundImage: "url('/slakt-pa-oland-mark-iii/bridge.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative pt-12 mx-auto max-w-[65ch]">{children}</div>
      </div>
    </footer>
  );
};
