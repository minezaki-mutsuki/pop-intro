import { ComponentStory } from "@storybook/react";

import { TopLayout } from "./layout";

export default {
  title: "pages/TopLayout",
  component: TopLayout,
};

const Template: ComponentStory<typeof TopLayout> = (args) => (
  <TopLayout {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  eventsListProps: [{
    day: "2022.12.30",
    explanation: "Aをした。",
  },{
    day: "2022.12.30",
    explanation: "Bをした。",
  },{
    day: "2022.12.30",
    explanation: "Cをした。",
  }],
  topProps: "軽音POPは神楽坂、葛飾キャンパスを中心に活動している軽音サークルです！",
  aboutListProps: [{
    title: "活動日",
    explanation: "毎週日曜",
  },{
    title: "部費",
    explanation: "5000円",
  },{
    title: "活動場所",
    explanation: "葛飾キャンパス",
  }],
  degreeProps: [{
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
  qandAProps: [{
    qestion: "質問文A",
    answer: "回答文A",
  },{
    qestion: "質問文B",
    answer: "回答文B",
  },{
    qestion: "質問文C",
    answer: "回答文C",
  }],
};
