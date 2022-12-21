import { ComponentStory } from "@storybook/react";

import { EventsList } from "./index";

export default {
  title: "uiParts/EventsList",
  component: EventsList,
};

const Template: ComponentStory<typeof EventsList> = (args) => (
  <EventsList {...args} />
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
    }
  ]
};
