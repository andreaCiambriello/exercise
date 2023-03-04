import { Link, Outlet } from "react-router-dom"

export function GithubUserList() {

    return (
        <div>
            <Link to="/users/andreaCiambriello">Show andreaCiambriello name</Link>
            <br />
            <br />
            <Link to="/users/gianmarcotoso">Show gianmarcotoso name</Link>
            <br />
            <br />
            <Link to="/users/malupp">Show malupp name</Link>
            <hr />
            <Outlet />
        </div>
    )
}