import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import Typography from "@mui/joy/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export default function PostCard(props) {
  return (
    <Card style={{ margin: "10px 0" }} variant='outlined' sx={{ width: 320 }}>
      <Typography level='h2' fontSize='sm' sx={{ mb: 0.5 }}>
        @{props.user}
      </Typography>
      <Typography level='h4' fontWeight='bold'>
        {props.title}
      </Typography>
      <Typography level='body2' noWrap={true}>
        {props.desc}
      </Typography>
      <AspectRatio minHeight='120px' maxHeight='200px' sx={{ my: 2 }}>
        <img
          src='https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286'
          srcSet='https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286&dpr=2 2x'
          loading='lazy'
          alt=''
        />
      </AspectRatio>
      <Box sx={{ display: "flex" }}>
        <div>
          <Typography level='body2'>Likes:</Typography>
          <Typography fontSize='lg' fontWeight='lg'>
            {props.likes ? props.likes : 0}
          </Typography>
        </div>
        <Button
          onClick={props.handleClick}
          variant='solid'
          size='sm'
          color='danger'
          aria-label='Explore Bahamas Islands'
          sx={{ ml: "auto", borderRadius: "50%" }}
        >
          {props.isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        </Button>
      </Box>
    </Card>
  );
}
