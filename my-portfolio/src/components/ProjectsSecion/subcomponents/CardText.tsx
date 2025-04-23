'use client';
import React, { useState } from 'react';
import { ReadMore } from '@/ui/button/ReadMore';

type Props = {
  text: string;
};

export const CardText = ({ text }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const maxLength = 130;

  const getShortText = () => {
    if (expanded || text.length <= maxLength) return text;
    return text.slice(0, maxLength).trim() + '...';
  };

  return (
    <p>
      {getShortText()}
      {text.length > maxLength && (
        <ReadMore
          expanded={expanded}
          onClick={() => setExpanded((prev) => !prev)}
        />
      )}
    </p>
  );
};
