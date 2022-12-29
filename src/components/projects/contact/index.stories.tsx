import { ComponentStory } from "@storybook/react";

import { Contact } from "./index";

export default {
  title: "projects/Contact",
  component: Contact,
};

const Template: ComponentStory<typeof Contact> = () => (
  <Contact />
);

export const Basic = Template.bind({});
