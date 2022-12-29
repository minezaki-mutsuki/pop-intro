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
    title: "2022.12.30",
    explanation: "Aをした。",
  },{
    title: "2022.12.30",
    explanation: "Bをした。",
  },{
    title: "2022.12.30",
    explanation: "Cをした。",
  }],
};
