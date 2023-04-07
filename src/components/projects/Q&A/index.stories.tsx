import { ComponentStory } from "@storybook/react";

import { QandA } from "./index";

export default {
  title: "projects/QandA",
  component: QandA,
};

const Template: ComponentStory<typeof QandA> = () => <QandA />;

export const Basic = Template.bind({});
