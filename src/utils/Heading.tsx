import React from 'react';

type Props = {
  children: React.ReactNode;
};

const Heading = ({ children }: Props) => {
  return <h2 className="basis-3/5 font-montserrat text-3xl font-bold">{children}</h2>;
};

export default Heading;
