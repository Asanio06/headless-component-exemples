import Template from './Template.vue';
import {Meta} from "@storybook/vue3";


const meta = {
    title: 'Example List',
    component: Template,
    // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
} satisfies Meta;

export const Primary = {
    args: {
        primary: true,
    },
};
export default meta;
