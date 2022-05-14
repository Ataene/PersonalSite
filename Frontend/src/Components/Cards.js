import React from 'react'
import Content from "./Content"
import { Button, Grid, Typography } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton } from '@mui/material'

const Cards = (props) => {

    const cardList = props.cardList;

  return (
    <>
        <Card sx={{ maxWidth: 300 }}>
            <CardHeader
                title={cardList.title}
            />
            <CardMedia
                component="img"
                height="194"
                image={cardList.image}
                alt={cardList.id}
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                {cardList.description}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                <ShareIcon />
                </IconButton>
            </CardActions>
        </Card>
    </>
  )
}

export default Cards;
