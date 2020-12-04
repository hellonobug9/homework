import React, { useCallback, useState, useRef, useEffect } from 'react';
import 'emoji-mart/css/emoji-mart.css';
import { Picker } from 'emoji-mart';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';
import SendIcon from '@material-ui/icons/Send';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';

const useStyles = makeStyles(theme => ({
  container: {
    zIndex: 100,
    position: 'relative'
  },
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center'
    // width: 400
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1
  },
  iconButton: {
    padding: 10
  },
  divider: {
    height: 28,
    margin: 4
  },
  emojiContainer: {
    top: -428,
    right: 0,
    position: 'absolute',
    zIndex: 101
  }
}));

export default function CustomizedInputBase() {
  const emojiRef = useRef();
  const smileIconRef = useRef();
  const classes = useStyles();
  const [value, setValue] = useState('');
  const [open, setOpen] = useState(false);
  const addEmoji = useCallback(e => {
    const emoji = e.native;
    setValue(prevValue => `${prevValue} ${emoji}`);
  }, []);
  const handleChange = useCallback(e => {
    setValue(e.target.value);
  });
  const handleOutSideClick = useCallback(
    e => {
      if (
        !emojiRef.current?.contains(e.target) &&
        !smileIconRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    },
    [emojiRef, smileIconRef]
  );

  useEffect(() => {
    window.addEventListener('click', handleOutSideClick);
    return () => window.removeEventListener('click', handleOutSideClick);
  }, []);

  return (
    <div className={classes.container}>
      {open ? (
        <div ref={emojiRef} className={classes.emojiContainer}>
          <Picker onSelect={addEmoji} />
        </div>
      ) : null}
      <Paper component="form" className={classes.root}>
        <IconButton className={classes.iconButton} aria-label="menu">
          <MenuIcon />
        </IconButton>
        <InputBase
          value={value}
          onChange={e => handleChange(e)}
          fullWidth
          className={classes.input}
          placeholder="Type a message"
          inputProps={{ 'aria-label': 'search google maps' }}
        />
        <IconButton
          ref={smileIconRef}
          onClick={() => setOpen(!open)}
          className={classes.iconButton}
          aria-label="search"
        >
          <SentimentSatisfiedIcon />
        </IconButton>
        <Divider className={classes.divider} orientation="vertical" />
        <IconButton
          type="submit"
          color="primary"
          className={classes.iconButton}
          aria-label="directions"
        >
          <SendIcon />
        </IconButton>
      </Paper>
    </div>
  );
}
