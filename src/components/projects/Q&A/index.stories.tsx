import { ComponentStory } from "@storybook/react";

import { QandA } from "./index";

export default {
  title: "projects/QandA",
  component: QandA,
};

const Template: ComponentStory<typeof QandA> = (args) => (
  <QandA {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  QandA: [{
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
