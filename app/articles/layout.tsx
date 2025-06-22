import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function ArticlesLayout({ children }: Props) {
  return (
    <div>
      {/* <h1>Articles Layout</h1> */}
      {children}
    </div>
  );
}
