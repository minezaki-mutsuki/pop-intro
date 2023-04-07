import { ComponentStory } from "@storybook/react";

import { HamburgerMenu } from "./index";

export default {
  title: "uiParts/HamburgerMenu",
  component: HamburgerMenu,
};

const Template: ComponentStory<typeof HamburgerMenu> = () => <HamburgerMenu />;

export const Basic = Template.bind({});
