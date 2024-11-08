import type { Meta, StoryObj } from "@storybook/react";
import { Input, List, Space } from "antd";
import MInput from "@mui/material/Input";
import React from "react";
import { CustomList } from "./List/CustomList";
import { User, users } from "../../mock/users";
import { ListSearch } from "./List/ListSearch/ListSearch";
import { DisplayList } from "./List/DisplayList/DisplayList";
import { HorizontalUserList } from "./List/HorizontalUserList/HorizontalUserList";
import { BadgeWithRandomColor } from "../internal/BadgeWithRandomColor/BadgeWithRandomColor";

const meta: Meta<typeof CustomList> = {
  component: CustomList,
  title: "Exemple 3",
};

export const Base: StoryObj<typeof CustomList> = {
  name: "CustomList avec liberté ui",
  args: {},
  render: () => {
    return (
      <CustomList items={users}>
        <ListSearch paths={["firstname"]} searchKey="firstname">
          {({ addSearch }) => (
            <Input
              placeholder="Prénom"
              style={{ width: "200px" }}
              onChange={(e) => addSearch(e.target.value)}
            />
          )}
        </ListSearch>

        <DisplayList<User>>
          {({ items }) => {
            return (
              <List
                dataSource={items}
                renderItem={({ firstname, lastname }) => (
                  <List.Item>
                    {firstname} {lastname}
                  </List.Item>
                )}
              />
            );
          }}
        </DisplayList>
      </CustomList>
    );
  },
};

export const BaseWithColor: StoryObj<typeof CustomList> = {
  name: "CustomList avec liberté ui et couleur",
  args: {},
  render: () => {
    return (
      <CustomList items={users}>
        <Space>
          <ListSearch paths={["firstname"]} searchKey="firstname">
            {({ addSearch }) => (
              <Input
                placeholder="Prénom"
                style={{ width: "200px" }}
                onChange={(e) => addSearch(e.target.value)}
              />
            )}
          </ListSearch>

          <BadgeWithRandomColor />
        </Space>

        <DisplayList<User>>
          {({ items }) => {
            return <HorizontalUserList users={items} />;
          }}
        </DisplayList>
      </CustomList>
    );
  },
};

// TODO: Utilisation MUI / ChakraUI  etc... pour l'input de Search

export const DisplayHorizontalUserList: StoryObj<typeof CustomList> = {
  name: "CustomList with HorizontalUserList",
  args: {},
  render: () => {
    return (
      <CustomList items={users}>
        <ListSearch paths={["firstname"]} searchKey="firstname">
          {({ addSearch }) => (
            <Input
              style={{ width: "200px", marginBottom: "0.5em" }}
              placeholder="Prénom"
              onChange={(e) => addSearch(e.target.value)}
            />
          )}
        </ListSearch>
        <DisplayList<User>>
          {({ items }) => {
            return <HorizontalUserList users={items} />;
          }}
        </DisplayList>
      </CustomList>
    );
  },
};

export const BaseWithMui: StoryObj<typeof CustomList> = {
  name: "CustomList avec MUI",
  args: {},
  render: () => {
    return (
      <CustomList items={users}>
        <ListSearch paths={["firstname"]} searchKey="firstname">
          {({ addSearch }) => (
            <MInput
              placeholder="Prénom"
              onChange={(e) => addSearch(e.target.value)}
            />
          )}
        </ListSearch>
        <DisplayList<User>>
          {({ items }) => {
            return (
              <List
                dataSource={items}
                renderItem={({ firstname, lastname }) => (
                  <List.Item>
                    {firstname} {lastname}
                  </List.Item>
                )}
              />
            );
          }}
        </DisplayList>
      </CustomList>
    );
  },
};

export const BaseWithBasicInput: StoryObj<typeof CustomList> = {
  name: "CustomList avec Input Basic",
  args: {},
  render: () => {
    return (
      <CustomList items={users}>
        <ListSearch paths={["firstname"]} searchKey="firstname">
          {({ addSearch }) => (
            <input
              placeholder="Prénom"
              onChange={(e) => addSearch(e.target.value)}
            />
          )}
        </ListSearch>

        <DisplayList<User>>
          {({ items }) => {
            return (
              <List
                dataSource={items}
                renderItem={({ firstname, lastname }) => (
                  <List.Item>
                    {firstname} {lastname}
                  </List.Item>
                )}
              />
            );
          }}
        </DisplayList>
      </CustomList>
    );
  },
};

export default meta;
