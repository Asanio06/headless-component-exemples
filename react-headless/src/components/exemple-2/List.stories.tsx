import type { Meta, StoryObj } from "@storybook/react";
import { List, Row, Space } from "antd";
import { CustomList } from "./List/CustomList";
import { ListSearch } from "./List/ListSearch/ListSearch";
import { DisplayList } from "./List/DisplayList/DisplayList";
import { User, users } from "../../mock/users";

const meta: Meta<typeof CustomList> = {
  component: CustomList,
  title: "Exemple 2",
};

export const Base: StoryObj<typeof CustomList> = {
  name: "Basic",
  args: {},
  render: (args) => {
    return (
      <CustomList items={users}>
        <ListSearch
          style={{ width: "200px" }}
          paths={["firstname"]}
          placeholder="Prénom"
          searchKey="firstname"
        />

        <DisplayList<User>
          renderItem={({ firstname, lastname }) => (
            <List.Item>
              {firstname} {lastname}
            </List.Item>
          )}
        />
      </CustomList>
    );
  },
};

export const ListWithVerticalHorizontalSpaceOnSearch: StoryObj<
  typeof CustomList
> = {
  name: "List avec search aligné horizontalement",
  args: {},
  render: (args) => {
    return (
      <CustomList items={users}>
        <Space>
          <ListSearch
            style={{ width: "200px" }}
            paths={["firstname"]}
            placeholder="Prénom"
            searchKey="firstname"
          />

          <ListSearch
            style={{ width: "200px" }}
            paths={["lastname"]}
            placeholder="Nom de famille"
            searchKey="lastname"
          />
        </Space>
        <DisplayList
          renderItem={({ firstname, lastname }) => (
            <List.Item>
              {firstname} {lastname}
            </List.Item>
          )}
        />
      </CustomList>
    );
  },
};

export const ListWithVerticalVerticalSpaceOnSearch: StoryObj<
  typeof CustomList
> = {
  name: "List avec search aligné verticalement",
  args: {},
  render: (args) => {
    return (
      <CustomList items={users}>
        <Space direction="vertical">
          <ListSearch
            style={{ width: "200px" }}
            paths={["firstname"]}
            placeholder="Prénom"
            searchKey="firstname"
          />

          <ListSearch
            style={{ width: "200px" }}
            paths={["lastname"]}
            placeholder="Nom de famille"
            searchKey="lastname"
          />
        </Space>
        <DisplayList
          renderItem={({ firstname, lastname }) => (
            <List.Item>
              {firstname} {lastname}
            </List.Item>
          )}
        />
      </CustomList>
    );
  },
};

export const ExtremListWithSearch: StoryObj<typeof CustomList> = {
  name: "List avec recherche de l'extrème",
  args: {},
  render: (args) => {
    return (
      <CustomList items={users}>
        <Row justify="space-between">
          <Space direction="vertical">
            <ListSearch
              style={{ width: "200px" }}
              paths={["firstname"]}
              placeholder="Prénom"
              searchKey="firstname"
            />

            <ListSearch
              style={{ width: "200px" }}
              paths={["lastname"]}
              placeholder="Nom de famille"
              searchKey="lastname"
            />
          </Space>

          <Space direction="vertical">
            <ListSearch
              style={{ width: "200px" }}
              paths={["firstname"]}
              placeholder="Prénom"
              searchKey="firstname"
            />

            <ListSearch
              style={{ width: "200px" }}
              paths={["lastname"]}
              placeholder="Nom de famille"
              searchKey="lastname"
            />
          </Space>
        </Row>
        <DisplayList
          renderItem={({ firstname, lastname }) => (
            <List.Item>
              {firstname} {lastname}
            </List.Item>
          )}
        />

        <Row justify="space-between">
          <Space direction="vertical">
            <ListSearch
              style={{ width: "200px" }}
              paths={["firstname"]}
              placeholder="Prénom"
              searchKey="firstname"
            />

            <ListSearch
              style={{ width: "200px" }}
              paths={["lastname"]}
              placeholder="Nom de famille"
              searchKey="lastname"
            />
          </Space>

          <Space direction="vertical">
            <ListSearch
              style={{ width: "200px" }}
              paths={["firstname"]}
              placeholder="Prénom"
              searchKey="firstname"
            />

            <ListSearch
              style={{ width: "200px" }}
              paths={["lastname"]}
              placeholder="Nom de famille"
              searchKey="lastname"
            />
          </Space>
        </Row>
      </CustomList>
    );
  },
};

export default meta;
