import { CustomList } from "../List/CustomList";
import { useWatch } from "../List/useWatch";
import {User} from "../../mock/users";

interface HorizontalListProps {
  listStore: CustomList<User>;
}

export function HorizontalUserList({ listStore }: HorizontalListProps) {
  const { filteredItems: users } = useWatch(listStore);
  return (
    <div
      style={{
        display: "flex",
        "flex-direction": "row",
          "column-gap":"5px"
      }}
    >
      {users.map(({ firstname, lastname }) => {
        return (
          <div style={{ width: "200px", "border": "2px solid blue", "border-radius":'5px', padding: "0 0.5em" }} >
            {firstname} {lastname}
          </div>
        );
      })}
    </div>
  );
}
