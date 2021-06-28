import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ComputerIcon from '@material-ui/icons/Computer';
import { ListContainer } from './styled';

const ListComponent = (props) => {

  return (
    <ListContainer>
      <List>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <ComputerIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={props.name} secondary={props.url}/>
        </ListItem>
      </List>
    </ListContainer>
  );
}

export default ListComponent