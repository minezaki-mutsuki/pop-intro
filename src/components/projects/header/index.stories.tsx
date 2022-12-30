import { ComponentStory } from "@storybook/react";

import { Header } from "./index";

export default {
  title: "projects/Header",
  component: Header,
};

const Template: ComponentStory<typeof Header> = () => (
  <Header />
);

export const Basic = Template.bind({});
