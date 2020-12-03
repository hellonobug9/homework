import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import faker from 'faker';
import { useNavigate } from 'react-router-dom';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
  Typography,
  makeStyles,
  CardActionArea
} from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import GetAppIcon from '@material-ui/icons/GetApp';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column'
  },
  statsItem: {
    alignItems: 'center',
    display: 'flex'
  },
  statsIcon: {
    marginRight: theme.spacing(1)
  }
}));

const ThreadCard = ({ className, thread, ...rest }) => {
  const navigate = useNavigate();
  const classes = useStyles();
  const goToChatBox = useCallback(() => {
    const { id } = thread;
    navigate(`./${id}`);
  }, []);

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <CardActionArea onClick={goToChatBox}>
        <CardContent>
          <Box display="flex" justifyContent="center" mb={3}>
            <Avatar alt="Product" src={faker.image.avatar()} variant="square" />
          </Box>
          <Typography
            align="center"
            color="textPrimary"
            gutterBottom
            variant="h4"
          >
            {thread.title}
          </Typography>
          <Typography align="center" color="textPrimary" variant="body1">
            {thread.description}
          </Typography>
        </CardContent>
        <Box flexGrow={1} />
      </CardActionArea>
      <Divider />
      <Box p={2}>
        <Grid container justify="space-between" spacing={2}>
          <Grid className={classes.statsItem} item>
            <AccessTimeIcon className={classes.statsIcon} color="action" />
            <Typography color="textSecondary" display="inline" variant="body2">
              Updated 2hr ago
            </Typography>
          </Grid>
          <Grid className={classes.statsItem} item>
            <GetAppIcon className={classes.statsIcon} color="action" />
            <Typography color="textSecondary" display="inline" variant="body2">
              {thread.totalDownloads} Downloads
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Card>
  );
};

ThreadCard.propTypes = {
  className: PropTypes.string,
  thread: PropTypes.object.isRequired
};

export default ThreadCard;
