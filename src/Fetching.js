import React, {useState, useEffect} from 'react'



function Fetching() {
    const url = 'https://api.github.com/users'
    const [users, setUsers] = useState([])

    const getUsers = async()=>{
        const response = await fetch(url)
        const users = await response.json()
        setUsers(users)

    }
    useEffect(()=>{
        getUsers()
    },[])
    return (
        <div>
            <h3>GitHub Users</h3>
            <ul className='users'>
            {users.map((user)=>{
                const {id, login , avatar_url, html_url} = user
                return <li key={id}>
                    <img src={avatar_url} alt='Avatar'/>
                    <div>
                        <h4> {login} </h4>
                        <a href={html_url}>Profile</a>
                    </div>
                    
                </li>
              })}
            </ul>
        </div>
    )
}

export default Fetching

