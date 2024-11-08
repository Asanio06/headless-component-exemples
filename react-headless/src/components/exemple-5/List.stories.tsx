import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Row, Space } from "antd";
import { users } from "../../mock/users";
import { BadgeWithRandomColor } from "../internal/BadgeWithRandomColor/BadgeWithRandomColor";
import { useCustomList } from "./List/CustomList";
import { HorizontalUserList } from "./HorizontalUserList/HorizontalUserList";

const meta: Meta = {
  title: "Exemple 5",
};

export const Base: StoryObj = {
  name: "",
  args: {},
  render: () => {
    return React.createElement(() => {
      const listStore = useCustomList(users);

      return (
        <Row style={{ rowGap: 5, width: "100%", flexDirection: "column" }}>
          <Space>
            <input
              style={{ width: "200px" }}
              placeholder="Prénom"
              onChange={(e) =>
                listStore.addSearch(
                  "firstnameKey",
                  ["firstname"],
                  e.target.value,
                )
              }
            />
            <BadgeWithRandomColor />
          </Space>

          <HorizontalUserList listStore={listStore} />
        </Row>
      );
    });
  },
};

export default meta;
