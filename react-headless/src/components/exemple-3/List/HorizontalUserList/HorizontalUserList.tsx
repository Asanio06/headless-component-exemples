import { Card, Row } from "antd";
import { User } from "../../../../mock/users";

interface HorizontalListProps {
  users: User[];
}

export function HorizontalUserList({ users }: HorizontalListProps) {
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
