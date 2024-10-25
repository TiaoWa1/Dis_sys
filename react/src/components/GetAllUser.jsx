import axios from "axios";
import { useEffect, useState } from "react";

const GetAllUser = () => {
    const [users, setAllUser] = useState();
    // 函式執行時一定會觸發一次UseEffect
    useEffect(() => {
        // 連結到後端(node/index.js)的app.get行要資料
        // then:收到資料後執行
        axios.get("http://localhost:8080/api/all")
             .then((response) => setAllUser(response.data))
             .catch((err)=>{console.error(err)});
    },[]);

    return (
        <>
            <h1>All Users</h1>
            <ul>
                {/* map: 拆分資料 */}
                {users && users.map( user => {
                    <li key={user.id}>
                        <h3>ID: {user.id}</h3>
                        name: {user.name}<br/>
                        email: {user.email}<br/>
                        age: {user.age}<br/>
                    </li>
                })}
            </ul>
        </>
    );
};


export default GetAllUser;