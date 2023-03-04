import { Link, Outlet } from "react-router-dom"

export function GithubUserList() {

    return (
        <div>
            <Link to="/users/andreaCiambriello">Show Github User</Link>
                
            <Outlet />
        </div>
    )
}