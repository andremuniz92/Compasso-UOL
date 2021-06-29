import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useHistory, useParams } from 'react-router-dom';
import { goToRepos, goToStarred } from '../../routes/coordinator';

const DetailCard = (props) => {
  const history = useHistory()
  const param = useParams()

  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={props.user.name}
          height="300"
          image={props.user.avatar_url}
          title={props.user.name}
        />
        <CardContent>
          <Typography gutterBottom color="primary" variant="h5" component="h2">
            {props.user.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.user.login} <br/>
            Número de repositórios:  {props.user.public_repos}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={()=>goToRepos(history,param.user)}>
          REPOS
        </Button>
        <Button size="small" color="primary" onClick={()=>goToStarred(history,param.user)}>
          STARRED
        </Button>
      </CardActions>
    </Card>
  );
}

export default DetailCard

