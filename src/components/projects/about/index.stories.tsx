import { ComponentStory } from "@storybook/react";

import { About } from "./index";

export default {
  title: "projects/About",
  component: About,
};

const Template: ComponentStory<typeof About> = (args) => (
  <About {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  aboutList: [{
    title: "活動日",
    explanation: "毎週日曜",
  },{
    title: "部費",
    explanation: "5000円",
  },{
    title: "活動場所",
    explanation: "葛飾キャンパス",
  }],
  degree: [{
    title: "レベル感",
    left: "初心者",
    right: "上級者",
    degree: 2,
  },{
    title: "雰囲気",
    left: "和やか",
    right: "厳しめ",
    degree: 1,
  }],
};
