import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import data from "./api";
import axios from "axios";

function App() {
    type User = {
        id: number;
        name: object;
        email: string;
        login: any;
    };

    const [data, setData] = useState<User[]>([]);
    useEffect(() => {
        const api = axios
            .get("https://randomuser.me/api?results=5")
            .then((response) => {
                console.log(response.data.results);
                setData(response.data.results);
            })
            .catch((e) => console.log(e));
    }, []);

    return (
        <>
            <table className="w-full">
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Title</td>
                        <td>Email</td>
                        <td>Role</td>
                    </tr>
                </thead>
                <tbody>
                  {data.map((item) =>
                  <tr key={item.login.uuid}>
                    <td>{`${item.name.first} ${item.name.last}`}</td>
                    <td>{`${item.name.title}`}</td>
                    <td>{`${item.email}`}</td>
                  </tr>
                  )

                  }
                </tbody>
            </table>
            {/* <div className="flex gap-4">
                <p>Name</p>
                <p>Title</p>
                <p>Email</p>
                <p>Role</p>
            </div>
            <div>
                {data.map((item: User) => (
                    <div key={item.login.uuid} className="flex gap-4">
                        <p>{`${item.name.first} ${item.name.last}`}</p>
                        <p>{`${item.name.title}`}</p>
                        <p>{`${item.email}`}</p>
                    </div>
                ))}
            </div> */}
        </>
    );
}

export default App;
