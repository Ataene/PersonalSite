import { Grid } from '@mui/material'
import React from 'react'
import Cards from "./Cards"
import Content from "./Content"

const Project = () => {

  console.log(Content)
  return (
    <>
      <Grid item xs={4}>
      {Content.map((cardList, index) => {
        if (index < 6 ){
        return <Cards cardList={cardList} />
        }
      })}
      </Grid>
    </>
  )
}

export default Project;