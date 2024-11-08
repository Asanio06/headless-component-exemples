import type { Meta, StoryObj } from "@storybook/react";
import { List } from "antd";
import { ListWithSearch } from "./List/ListWithSearch";
import { users } from "../../mock/users";

const meta: Meta<typeof ListWithSearch> = {
  component: ListWithSearch,
  title: "Exemple 1",
};

export const Base: StoryObj<typeof ListWithSearch> = {
  name: "Default BadList",
  args: {},
  render: (args) => {
    return (
      <ListWithSearch
        items={users}
        searchPath="firstname"
        renderItem={({ firstname, lastname }) => (
          <List.Item>
            {firstname} {lastname}
          </List.Item>
        )}
      />
    );
  },
};

export const BadListWithSearchOnRight: StoryObj<typeof ListWithSearch> = {
  name: "BadList with search on right",
  args: {},
  render: (args) => {
    return (
      <ListWithSearch
        items={users}
        searchPath="firstname"
        position={["top", "right"]}
        renderItem={({ firstname, lastname }) => (
          <List.Item>
            {firstname} {lastname}
          </List.Item>
        )}
      />
    );
  },
};

export const BadListWithSearchOnBottom: StoryObj<typeof ListWithSearch> = {
  name: "BadList with search on bottom",
  args: {},
  render: (args) => {
    return (
      <ListWithSearch
        items={users}
        searchPath="firstname"
        position={["bottom", "right"]}
        renderItem={({ firstname, lastname }) => (
          <List.Item>
            {firstname} {lastname}
          </List.Item>
        )}
      />
    );
  },
};

export default meta;
