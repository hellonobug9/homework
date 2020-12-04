import React, { useState, useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  SvgIcon,
  makeStyles,
  Typography,
  Collapse,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core';
import { Search as SearchIcon } from 'react-feather';
import StarBorder from '@material-ui/icons/StarBorder';
import Breadcrumbs from 'src/components/Breadcrumbs';

const useStyles = makeStyles(theme => ({
  root: {},
  importButton: {
    marginRight: theme.spacing(1)
  },
  exportButton: {
    marginRight: theme.spacing(1)
  },
  boxLeft: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  textField: {
    paddingTop: 25,
    paddingLeft: '15%',
    paddingRight: '15%'
  }
}));

const Toolbar = ({ className, currentThreadDetail, ...rest }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  // const { title } = currentThreadDetail;
  const toggleSearchBar = useCallback(() => {
    setOpen(prevOpen => !prevOpen);
  }, [open]);

  const breadcrumbsItems = useMemo(
    () => [
      {
        title: 'Participants',
        action: null
      },
      {
        title: 'Gallery',
        action: null
      },
      {
        title: 'Find',
        action: toggleSearchBar
      }
    ],
    [toggleSearchBar]
  );

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Box mt={3}>
        <Card>
          <CardContent>
            <Box className={classes.boxLeft} maxWidth={500}>
              <div>
                <Typography
                  align="center"
                  color="textPrimary"
                  gutterBottom
                  variant="h4"
                >
                  Thread name
                </Typography>
              </div>
              <div>
                <Breadcrumbs items={breadcrumbsItems} />
              </div>
            </Box>
            <Collapse
              className={classes.textField}
              in={open}
              timeout={30}
              unmountOnExit
            >
              <TextField
                fullWidth
                size="small"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SvgIcon fontSize="small" color="action">
                        <SearchIcon />
                      </SvgIcon>
                    </InputAdornment>
                  )
                }}
                placeholder="Search class"
                variant="outlined"
              />
            </Collapse>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
};

Toolbar.propTypes = {
  className: PropTypes.string
};

export default Toolbar;
