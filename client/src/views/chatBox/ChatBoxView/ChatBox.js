import React from 'react';
import { Box, Container, Grid, makeStyles } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import { useThreadDetail } from 'src/context/Threads';
import Toolbar from './Toolbar';
import Loading from 'src/components/LottieLoading';

const useStyles = makeStyles(theme => ({}));
const ChatBox = () => {
  const params = useParams();
  const { id } = params;
  const classes = useStyles();
  const { currentThreadDetail, error, loading } = useThreadDetail(id);
  console.log('currentThreadDetail', currentThreadDetail);

  if (loading)
    return (
      <>
        <Loading />
      </>
    );
  return (
    <Container maxWidth={false}>
      <Toolbar currentThreadDetail={currentThreadDetail} />
      <Box mt={3}>
        <Grid container spacing={3}></Grid>
      </Box>
    </Container>
  );
};

export default ChatBox;
