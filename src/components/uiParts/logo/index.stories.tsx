import { ComponentStory } from "@storybook/react";

import { Logo } from "./index";

export default {
  title: "uiParts/Logo",
  component: Logo,
};

const Template: ComponentStory<typeof Logo> = () => (
  <Logo />
);

export const Basic = Template.bind({});
Basic.args = {};
