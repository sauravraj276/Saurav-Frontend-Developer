import React from 'react'
import style from './SearchSection1.module.css'
import SearchBar from '../searchBar/SearchBar'

export default function SearchSection1() {
  return (
    <div className={style.searchSection1}>
      <SearchBar/>
    </div>
  )
}
