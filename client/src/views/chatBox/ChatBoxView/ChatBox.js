import React, { useCallback, Fragment, useMemo, useState } from 'react';
import {
  Box,
  Container,
  Grid,
  makeStyles,
  Card,
  CardContent,
  Drawer
} from '@material-ui/core';
import { useParams } from 'react-router-dom';
import { useThreadDetail } from 'src/context/Threads';
import Toolbar from './Toolbar';
import Loading from 'src/components/LottieLoading';
import Input from './Input';
import Message from './Message';
import Rankings from '../rankings'

const messageDetails = {
  '2': [
    {
      id: '1',
      imageUrl: require('src/assets/profiles/kim.jpeg'),
      imageAlt: null,
      messageText: 'Ok fair enough. Well good talking to you.',
      createdAt: 'Oct 20',
      isMyMessage: true
    },
    {
      id: '2',
      imageUrl: require('src/assets/profiles/ben.png'),
      imageAlt: "Kim O'Neil",
      messageText: `
              Not sure exactly yet. It will be next year sometime. Probably late.
          `,
      createdAt: 'Oct 20',
      isMyMessage: false
    },
    {
      id: '3',
      imageUrl: require('src/assets/profiles/kim.jpeg'),
      imageAlt: null,
      messageText: 'Yeah I know. But oh well. So when is the big date?',
      createdAt: 'Oct 19',
      isMyMessage: true
    },
    {
      id: '4',
      imageUrl: require('src/assets/profiles/ben.png'),
      imageAlt: "Kim O'Neil",
      messageText: `
              Well I know you like doing that stuff. But honestly I think
              you are already really talented. It's a shame you haven't found
              what you are looking for yet.
          `,
      createdAt: 'Oct 19',
      isMyMessage: false
    }
  ]
};

const useStyles = makeStyles(theme => ({
  chatBoxRoot: {
    height: '86vh',
    display: 'flex',
    flexDirection: 'column'
  },
  boxContainer: {
    flex: 1
  },
  cardContainer: {
    height: '100%'
  },
  msgContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
    paddingLeft: '15%',
    paddingRight: '15%'
  },
  rankingsContent: {
    paddingLeft: '15%',
    paddingRight: '15%'
  },
  boxMsgs: {
    height: '100%'
  },
  boxInput: {}
}));
const ChatBox = () => {
  const [openDrawer, setOpenDrawer] = useState(false)
  const params = useParams();
  const { id } = params;
  const classes = useStyles();
  // const { currentThreadDetail, error, loading } = useThreadDetail(id);
  // console.log('currentThreadDetail', currentThreadDetail);

  // if (loading)
  //   return (
  //     <>
  //       <Loading />
  //     </>
  //   );
  const renderMessages = useMemo(
    () =>
      messageDetails['2'].map(message => {
        return (
          <div>
            <Message
              key={message.id}
              isMyMessage={message.isMyMessage}
              message={message}
            />
          </div>
        );
      }),
    [messageDetails]
  );
  return (
    <Container className={classes.chatBoxRoot} maxWidth={false}>
      <Drawer open={openDrawer} anchor="right">
        <Rankings />
      </Drawer>
      <Toolbar />
      <Box className={classes.boxContainer} mt={3}>
        <Card className={classes.cardContainer}>
          <CardContent className={classes.msgContent}>
            <div className={classes.boxMsgs}>{renderMessages}</div>
            <div className={classes.boxInput}>
              <Input />
            </div>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default ChatBox;
