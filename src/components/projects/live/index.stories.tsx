import { ComponentStory } from "@storybook/react";

import { Live } from "./index";

export default {
  title: "projects/Live",
  component: Live,
};

const Template: ComponentStory<typeof Live> = () => (
  <Live />
);

export const Basic = Template.bind({});
