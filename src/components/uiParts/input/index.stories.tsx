import { ComponentStory } from "@storybook/react";

import { Input } from "./index";

export default {
  title: "uiParts/Input",
  component: Input,
};

const Template: ComponentStory<typeof Input> = () => (
  <Input />
);

export const Basic = Template.bind({});
Basic.args = {
};
