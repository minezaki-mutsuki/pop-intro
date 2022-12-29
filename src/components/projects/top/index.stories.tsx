import { ComponentStory } from "@storybook/react";

import { Top } from "./index";

export default {
  title: "projects/Top",
  component: Top,
};

const Template: ComponentStory<typeof Top> = (args) => (
  <Top {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  text: "軽音POPは神楽坂、葛飾キャンパスを中心に活動している軽音サークルです！",
};
