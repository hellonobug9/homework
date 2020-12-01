import React, { useState, useMemo } from 'react';
import { Box, Container, Grid, makeStyles } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import { useClasses } from 'src/context/Classes';
import Loading from 'src/components/LottieLoading';
import Page from 'src/components/Page';
import Toolbar from './Toolbar';
import ClassCard from './ClassCard';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  },
  productCard: {
    height: '100%'
  }
}));

const ProductList = () => {
  const classes = useStyles();

  const { listClass, error, loading } = useClasses();

  const listClassView = useMemo(
    () => (
      <>
        {listClass.map(product => (
          <Grid item key={product.id} lg={4} md={6} xs={12}>
            <ClassCard className={classes.productCard} product={product} />
          </Grid>
        ))}
      </>
    ),
    [listClass]
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
            {listClassView}
          </Grid>
        </Box>
        <Box mt={3} display="flex" justifyContent="center">
          <Pagination color="primary" count={3} size="small" />
        </Box>
      </Container>
    </Page>
  );
};

export default ProductList;
