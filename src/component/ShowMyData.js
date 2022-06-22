import React , { useContext } from 'react'
import { DataContext } from '../Context/FormaContext'

export default function ShowMyData() {
const {userData , setUserData} = useContext(DataContext) 

    return (
        <ul>
        {/* {userData.map(() => {
           <p>userData</p>
        })} */}
        </ul>
    )
}
