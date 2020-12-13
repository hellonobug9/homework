import React from 'react';
import { makeStyles } from '@material-ui/core';
import Page from 'src/components/Page';
import BluePrint from './Blueprint';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const ChatBoxView = () => {
  const classes = useStyles();
  return (
    <Page className={classes.root} title="Blueprint">
      <BluePrint />
    </Page>
  );
};

export default ChatBoxView;
