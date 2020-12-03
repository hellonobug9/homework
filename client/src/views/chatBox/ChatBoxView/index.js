import React from 'react';
import { ChatBoxProvider } from 'src/context/ChatBox';
import { ThreadsProvider } from 'src/context/Threads';
import { makeStyles } from '@material-ui/core';
import Page from 'src/components/Page';
import ChatBox from './ChatBox';

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
    <ChatBoxProvider>
      <ThreadsProvider>
        <Page className={classes.root} title="Chat box">
          <ChatBox />
        </Page>
      </ThreadsProvider>
    </ChatBoxProvider>
  );
};

export default ChatBoxView;
