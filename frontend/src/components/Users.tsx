import React from "react";
import {gql, useQuery} from '@apollo/client'

const USERS_QUERY = gql`
  const USERS_QUERY {
    users {
      id
      name
    }  
  }
`

export default function Users(){
  return (
    <div>

    </div>
  )
}