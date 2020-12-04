import React from 'react';
import {
  Box,
  Container,
  Grid,
  makeStyles,
  Card,
  CardContent
} from '@material-ui/core';
import { useParams } from 'react-router-dom';
import { useThreadDetail } from 'src/context/Threads';
import Toolbar from './Toolbar';
import Loading from 'src/components/LottieLoading';
import Input from './Input';

const useStyles = makeStyles(theme => ({
  chatBoxRoot: {
    // height: '100%',
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
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%'
  },
  boxMsgs: {},
  boxInput: {}
}));
const ChatBox = () => {
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
  return (
    <Container className={classes.chatBoxRoot} maxWidth={false}>
      <Toolbar />
      <Box className={classes.boxContainer} mt={3}>
        <Card className={classes.cardContainer}>
          <CardContent className={classes.cardContent}>
            <Box className={classes.boxMsgs}>Hello no bug</Box>
            <Box className={classes.boxInput}>
              <Input />
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default ChatBox;
