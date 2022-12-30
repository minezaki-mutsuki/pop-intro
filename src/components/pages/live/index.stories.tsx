import { ComponentStory } from "@storybook/react";

import { LiveLayout } from "./layout";

export default {
  title: "pages/LiveLayout",
  component: LiveLayout,
};

const Template: ComponentStory<typeof LiveLayout> = (args) => (
  <LiveLayout {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  liveList: [{
    day: "2022.12.30",
    link: "#",
    name: "夏ライブ",
  },{
    day: "2022.12.30",
    link: "#",
    name: "夏ライブ",
  },{
    day: "2022.12.30",
    link: "#",
    name: "夏ライブ",
  },{
    day: "2022.12.30",
    link: "#",
    name: "夏ライブ",
  },]
};
