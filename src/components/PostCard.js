import React from "react";
import { Link } from "react-router-dom";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';



const PostCard = (props) => {

    const post = props.post;

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea LinkComponent={Link} to={`/details/${post.id}`}>
                <CardHeader
                    avatar={
                        <Avatar alt={post.owner.firstName} src={post.owner.picture} />
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title={(post.owner.firstName + post.owner.lastName) || "First Name"}
                    subheader={post.publishDate.substr(0, 10) || "PubDate"}
                />
                <CardMedia
                    component="img"
                    height="140"
                    image={post.image || "/img/contemplative-reptile.jpg"}
                    alt="green iguana"
                    loading="lazy"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        {post.text}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                {
                    post.tags.map(tag => {
                        return(
                            <Button key={tag} LinkComponent={Link} to={"/details/"} size="small">{tag}</Button>
                        )
                    })
                }
                
            </CardActions>
        </Card>
    );
}

export default PostCard;

