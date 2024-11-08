import { Card, Row } from "antd";
import { CustomList } from "../List/CustomList";
import { useWatch } from "../List/useWatch";
import { User } from "../../../mock/users";

interface HorizontalListProps {
  listStore: CustomList<User>;
}

export function HorizontalUserList({ listStore }: HorizontalListProps) {
  const { filteredItems: users } = useWatch(listStore);
  return (
    <Row
      style={{
        width: "500px",
        overflowX: "auto",
        flexDirection: "row",
        columnGap: "1em",
      }}
      wrap={false}
    >
      {users.map(({ firstname, lastname, id }) => {
        return (
          <Card style={{ width: "150px" }} key={id}>
            {firstname} {lastname}
          </Card>
        );
      })}
    </Row>
  );
}
