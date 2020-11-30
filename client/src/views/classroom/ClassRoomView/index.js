import React from 'react';
import { Container, makeStyles } from '@material-ui/core';
import { ClassesProvider } from 'src/context/Classes';
import Page from 'src/components/Page';
import Toolbar from './Toolbar';
import ListClass from './ListClass';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const ClassRoomView = () => {
  const classes = useStyles();
  return (
    <ClassesProvider>
      <Page className={classes.root} title="Classes">
        <Container maxWidth={false}>
          <Toolbar />
          <ListClass />
        </Container>
      </Page>
    </ClassesProvider>
  );
};

export default ClassRoomView;
