import type {Meta, StoryObj} from "storybook-solidjs";
import {createCustomList, CustomList} from "./List/CustomList";
import {users} from "../mock/users";
import {HorizontalUserList} from "./HorizontalUserList/HorizontalUserList";


const meta: Meta = {
    title: "Exemple with solid",
};


function UserList() {
    const list = new CustomList(users);

    return (
        <div style={{
            display: "flex",
            "flex-direction": "column",
            "row-gap":"5px"
        }}>
            <input style={{width:"150px"}} onInput={(e) => list.addSearch("firstname", ["firstname"], e.target.value)}/>
            <HorizontalUserList listStore={list}/>
        </div>
    )
}

export const Base: StoryObj = {
    name: "List",
    args: {},
    render: () => {
        return <UserList/>
    }
}

export default meta;