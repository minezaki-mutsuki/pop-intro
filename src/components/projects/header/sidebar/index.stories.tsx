import { ComponentStory } from "@storybook/react";

import { Sidebar } from "./index";

export default {
  title: "uiParts/Sidebar",
  component: Sidebar,
};

const Template: ComponentStory<typeof Sidebar> = () => <Sidebar />;

export const Basic = Template.bind({});
