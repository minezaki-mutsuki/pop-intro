import { ComponentStory } from "@storybook/react";

import { Degree } from "./index";

export default {
  title: "uiParts/Degree",
  component: Degree,
};

const Template: ComponentStory<typeof Degree> = (args) => (
  <Degree {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  title: "技術感",
  right: "上級者",
  left: "初心者",
  degree: 2,
};
