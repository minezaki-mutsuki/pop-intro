import { ComponentStory } from "@storybook/react";

import { AboutList } from "./index";

export default {
  title: "uiParts/AboutList",
  component: AboutList,
};

const Template: ComponentStory<typeof AboutList> = (args) => (
  <AboutList {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  items: [
    {
        title: "タイトル",
        explanation: "説明",
    },{
        title: "タイトル",
        explanation: "説明",
    },{
        title: "タイトル",
        explanation: "説明",
    },{
      title: "タイトル",
      explanation: "説明",
  },{
      title: "タイトル",
      explanation: "説明",
  },{
      title: "タイトル",
      explanation: "説明",
  }
  ]
};
