import React from 'react'


const UserItem = ({user}) => {
    return (
        <tr>
            <td>
                {user.user_name}
            </td>
            <td>
                {user.first_name}
            </td>
            <td>
                {user.last_name}
            </td>
            <td>
                {user.birth_date}
            </td>
             <td>
                {user.email}
            </td>
        </tr>
    )
}


const User = ({users}) => {
    return (
        <table>
            <th>
                User name
            </th>
            <th>
                First name
            </th>
            <th>
                Last name
            </th>
            <th>
                Birth date
            </th>
            <th>
                Email
            </th>
            {users.map((user) => <UserItem user={user} /> )}
        </table>
    )
}

export default User