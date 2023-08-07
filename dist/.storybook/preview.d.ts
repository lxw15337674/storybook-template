/** @type { import('@storybook/react').Preview } */
declare const preview: {
    parameters: {
        actions: {
            argTypesRegex: string;
        };
        controls: {
            matchers: {
                color: RegExp;
                date: RegExp;
            };
        };
    };
};
export default preview;
