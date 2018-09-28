import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import StarIcon from '@material-ui/icons/Star';
import SendIcon from '@material-ui/icons/Send';
import MailIcon from '@material-ui/icons/Mail';
import DeleteIcon from '@material-ui/icons/Delete';
import ReportIcon from '@material-ui/icons/Report';

export const mailFolderListItems = (
  <div>
    <ListItem button onClick={() => {
      window.location.href = '/';
    }}>
      <ListItemText primary="Home" />
    </ListItem>
    <ListItem button onClick={() => {
      window.location.href = '/mice';
    }}>
      <ListItemText primary="Add Mice" />
    </ListItem>
    <ListItem button onClick={() => {
      window.location.href = '/settings';
    }}>
      <ListItemText primary="Settings" />
    </ListItem>
    <ListItem button onClick={() => {
      window.location.href = '/calendar';
    }}>
      <ListItemText primary="Calendar" />
    </ListItem>
  </div>
);

