import { ComponentStory } from "@storybook/react";

import { Footer } from "./index";

export default {
  title: "projects/Footer",
  component: Footer,
};

const Template: ComponentStory<typeof Footer> = () => {
  return <Footer />;
};

export const Basic = Template.bind({});
