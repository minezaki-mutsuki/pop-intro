import { ComponentStory } from "@storybook/react";

import { ExampleText } from "./index";

export default {
  title: "uiParts/ExampleText",
  component: ExampleText,
};

const Template: ComponentStory<typeof ExampleText> = (args) => (
  <ExampleText {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  text: "テキスト",
};
