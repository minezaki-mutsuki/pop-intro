import { ComponentStory } from "@storybook/react";

import { QaButton } from "./index";

export default {
  title: "uiParts/QaButton",
  component: QaButton,
};

const Template: ComponentStory<typeof QaButton> = (args) => (
  <QaButton {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  qestion: "質問文",
  answer: "回答文"
};
