import { ComponentStory } from "@storybook/react";

import { Events } from "./index";

export default {
  title: "projects/Events",
  component: Events,
};

const Template: ComponentStory<typeof Events> = (args) => (
  <Events {...args} />
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
  }],
};
