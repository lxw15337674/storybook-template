import React from 'react';

export interface AutoInputProps
    extends Omit<React.HTMLAttributes<HTMLTextAreaElement>, 'onChange' | 'children'> {
    value?: string;
    defaultValue?: string;
    onChange?: (v: string) => void;
    width?: string;
}
