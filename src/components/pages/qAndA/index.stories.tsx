import { ComponentStory } from "@storybook/react";

import { QandALayout } from "./layout";

export default {
  title: "pages/QandALayout",
  component: QandALayout,
};

const Template: ComponentStory<typeof QandALayout> = (args) => (
  <QandALayout {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  qAndAList: [{
    qestion: "質問文A",
    answer: "回答文A",
  },{
    qestion: "質問文B",
    answer: "回答文B",
  },{
    qestion: "質問文C",
    answer: "回答文C",
  },{
    qestion: "質問文A",
    answer: "回答文A",
  },{
    qestion: "質問文B",
    answer: "回答文B",
  },{
    qestion: "質問文C",
    answer: "回答文C",
  },]
};