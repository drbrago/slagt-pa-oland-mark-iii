import { ReactNode } from "react";

type Props = {
  children: ReactNode | ReactNode[];
};

export const MainContent = ({ children }: Props) => {
  return (
    <main
      id="main-content"
      className="min-h-screen bg-black text-albescent-white-100"
    >
      <div className="prose mx-auto">
        <section className="mx-auto max-w-5xl">
          <div className="mx-auto prose prose-invert max-w-none">
            {children}
          </div>
        </section>
      </div>
    </main>
  );
};
