import { ComponentStory } from "@storybook/react";

import { EventsLayout } from "./layout";

export default {
  title: "pages/EventsLayout",
  component: EventsLayout,
};

const Template: ComponentStory<typeof EventsLayout> = (args) => (
  <EventsLayout {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  eventsList: [{
    day: "2022.12.30",
    explanation: "Aをした。",
  },{
    day: "2022.12.30",
    explanation: "Bをした。",
  },{
    day: "2022.12.30",
    explanation: "Cをした。",
  },{
    day: "2022.12.30",
    explanation: "Aをした。",
  },{
    day: "2022.12.30",
    explanation: "Bをした。",
  },{
    day: "2022.12.30",
    explanation: "Cをした。",
  }],
};
