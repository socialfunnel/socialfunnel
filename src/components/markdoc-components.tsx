import React, { ReactNode } from "react";

interface CaseStudyBoxProps {
  children: ReactNode;
}

export function CaseStudyBox({ children }: CaseStudyBoxProps) {
  return <div className="case-study-box">{children}</div>;
}

interface HeadingProps {
  level: number;
  id?: string;
  children: ReactNode;
}

export function Heading({ level, id, children }: HeadingProps) {
  const Tag = `h${level}` as keyof React.JSX.IntrinsicElements;

  return (
    <Tag id={id} className={`heading-${level}`}>
      {children}
    </Tag>
  );
}
