import React from 'react'
import styles from './styles'
export default function NavTags({}) {
  return (
    <div className={styles.tagcontainer}>
      
    </div>
  )
}


const Tags = ({tagname, isSelected}) => {
  
  return(
    <div className={styles.tagthing}>
      {tagname}
    </div>
  )
}