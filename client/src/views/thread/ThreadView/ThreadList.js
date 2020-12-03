import React, { useState, useMemo } from 'react';
import { Box, Container, Grid, makeStyles } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import { useThreads } from 'src/context/Threads';
import Loading from 'src/components/LottieLoading';
import Page from 'src/components/Page';
import Toolbar from './Toolbar';
import ThreadCard from './ThreadCard';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  },
  threadCard: {
    height: '100%'
  }
}));

const ThreadList = () => {
  const classes = useStyles();

  const { listThread, error, loading } = useThreads();

  const listThreadView = useMemo(
    () => (
      <>
        {listThread.map(thread => (
          <Grid item key={thread.id} lg={4} md={6} xs={12}>
            <ThreadCard className={classes.threadCard} thread={thread} />
          </Grid>
        ))}
      </>
    ),
    [listThread]
  );

  if (loading) {
    return (
      <>
        <Loading />
      </>
    );
  }

  return (
    <Page className={classes.root} title="Products">
      <Container maxWidth={false}>
        <Toolbar />
        <Box mt={3}>
          <Grid container spacing={3}>
            {listThreadView}
          </Grid>
        </Box>
        <Box mt={3} display="flex" justifyContent="center">
          <Pagination color="primary" count={3} size="small" />
        </Box>
      </Container>
    </Page>
  );
};

export default ThreadList;
