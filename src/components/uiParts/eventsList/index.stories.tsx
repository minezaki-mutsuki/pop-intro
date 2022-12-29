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
        day: "日付",
        explanation: "説明",
    },{
        day: "日付",
        explanation: "説明",
    },{
        day: "日付",
        explanation: "説明",
    }
  ]
};
