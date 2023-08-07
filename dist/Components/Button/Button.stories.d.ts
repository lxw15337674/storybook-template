import { StoryObj } from '@storybook/react';
import { Button } from './Button';
declare const _default: import("@storybook/types").ComponentAnnotations<import("@storybook/react/dist/types-0a347bb9").R, import("./Button").ButtonProps>;
export default _default;
type Story = StoryObj<typeof Button>;
export declare const Primary: Story;
export declare const Secondary: {
    args: {
        label: string;
    };
};
export declare const Large: {
    args: {
        size: string;
        label: string;
    };
};
export declare const Small: {
    args: {
        size: string;
        label: string;
    };
};
