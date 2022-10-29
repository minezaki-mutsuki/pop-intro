import { ComponentStory } from "@storybook/react";

import { Title } from "./index";

export default {
  title: "uiParts/Title",
  component: Title,
};

const Template: ComponentStory<typeof Title> = (args) => (
  <Title {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  title: "ABOUT",
};
