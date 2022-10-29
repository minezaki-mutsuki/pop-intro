import { ComponentStory } from "@storybook/react";

import { Button } from "./index";

export default {
  title: "uiParts/Button",
  component: Button,
};

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  text: "イベント一覧",
  onClick: () => console.log("ページ遷移します"),
};
