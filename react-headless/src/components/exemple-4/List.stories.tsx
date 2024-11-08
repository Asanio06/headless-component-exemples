import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Badge, List, Row, Space } from "antd";
import { useListSearch } from "./useListSearch";
import { users } from "../../mock/users";
import { BadgeWithRandomColor } from "../internal/BadgeWithRandomColor/BadgeWithRandomColor";
import { HorizontalUserList } from "./HorizontalUserList/HorizontalUserList";

const meta: Meta = {
  title: "Exemple 4",
};

export const Base: StoryObj = {
  name: "List using hook",
  args: {},
  render: () => {
    return React.createElement(() => {
      const { addSearch, filteredItems } = useListSearch(users);

      return (
        <Row style={{ rowGap: 5, width: "100%", flexDirection: "column" }}>
          <input
            style={{ width: "200px" }}
            placeholder="Prénom"
            onChange={(e) =>
              addSearch("firstnameKey", ["firstname"], e.target.value)
            }
          />

          <List
            dataSource={filteredItems}
            renderItem={({ lastname, firstname }) => {
              return (
                <List.Item>
                  {firstname} {lastname}
                </List.Item>
              );
            }}
          />
        </Row>
      );
    });
  },
};

export const BaseWithColor: StoryObj = {
  name: "List using hook with color",
  args: {},
  render: () => {
    return React.createElement(() => {
      const { addSearch, filteredItems } = useListSearch(users);

      return (
        <Row style={{ rowGap: 5, width: "100%", flexDirection: "column" }}>
          <Space>
            <input
              style={{ width: "200px" }}
              placeholder="Prénom"
              onChange={(e) =>
                addSearch("firstnameKey", ["firstname"], e.target.value)
              }
            />
            <BadgeWithRandomColor />
          </Space>

          <HorizontalUserList users={filteredItems} />
        </Row>
      );
    });
  },
};

export const BaseWithHorizontalList: StoryObj = {
  name: "Horizontal List using hook",
  args: {},
  render: () => {
    return React.createElement(() => {
      const { addSearch, filteredItems } = useListSearch(users);

      return (
        <Row style={{ rowGap: 5, width: "100%", flexDirection: "column" }}>
          <input
            style={{ width: "200px" }}
            placeholder="Prénom"
            onChange={(e) =>
              addSearch("firstnameKey", ["firstname"], e.target.value)
            }
          />

          <HorizontalUserList users={filteredItems} />
        </Row>
      );
    });
  },
};

export default meta;
