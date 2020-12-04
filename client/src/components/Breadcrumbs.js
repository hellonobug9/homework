import React, { useMemo, Fragment, useCallback } from 'react';
import { Typography, Breadcrumbs, Link, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {},
  typo: {
    cursor: 'pointer'
  }
}));

export default function SimpleBreadcrumbs({ items = [] }) {
  const classes = useStyles();
  const handleClick = useCallback(item => {
    if (item.action) {
      item.action();
    }
  }, []);
  const renderItems = useMemo(
    () =>
      items.map(item => {
        return (
          <div key={item.title}>
            <Typography
              className={classes.typo}
              onClick={() => handleClick(item)}
              color="inherit"
            >
              {item.title}
            </Typography>
          </div>
        );
      }),
    [items]
  );
  return <Breadcrumbs aria-label="breadcrumb">{renderItems}</Breadcrumbs>;
}
