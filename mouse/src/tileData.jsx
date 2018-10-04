import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

function MailFolderListItems() {
  return (
    <div>
      <ListItem
        button
        onClick={() => {
          window.location.href = '/';
        }}
      >
        <ListItemText primary="Home" />
      </ListItem>
      <ListItem
        button
        onClick={() => {
          window.location.href = '/mice';
        }}
      >
        <ListItemText primary="Add Mice" />
      </ListItem>
      <ListItem
        button
        onClick={() => {
          window.location.href = '/settings';
        }}
      >
        <ListItemText primary="Settings" />
      </ListItem>
      <ListItem
        button
        onClick={() => {
          window.location.href = '/calendar';
        }}
      >
        <ListItemText primary="Calendar" />
      </ListItem>
    </div>
  );
}

export default MailFolderListItems;
