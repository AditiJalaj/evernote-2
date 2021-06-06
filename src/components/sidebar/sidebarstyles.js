const styles = theme => ({
    root: {
      backgroundColor: theme.palette.background.paper,
      height: 'calc(100% - 35px)',
      position: 'absolute',
      left: '0',
      width: '300px',
      boxShadow: '0px 0px 2px black',
      borderRadius:'10px',
      border:'3px solid black'
    },
    newChatBtn: {
      borderRadius: '0px'
    },
    unreadMessage: {
      color: 'red',
      position: 'absolute',
      top: '0',
      right: '5px'
    },
    newNoteBtn: {
      width: '100%',
      height: '35px',
      border:'1px solid black',
      borderRadius: '10px',
      backgroundColor: '#370f4d',
      color: 'white',
      '&:hover': {
        backgroundColor: '#a688ce'
      }
    },
    sidebarContainer: {
      marginTop: '0px',
      width: '300px',
      height: '100%',
      boxSizing: 'border-box',
      float: 'left',
      overflowY: 'hidden',
      overflowX: 'hidden',
      paddingRight:'2px',
      border:'3px solid black',
      borderRadius:'10px',
      backgroundColor:'#8268a3'
    },
    newNoteInput: {
      width: 'auto',
      margin: '4px',
      height: '35px',
      outline: 'none',
      border: '1px solid black',
      borderRadius:'10px',
      paddingRight: '10px',
      paddingLeft: '10px',
      '&:focus': {
        outline: '2px solid rgba(81, 203, 238, 1)'
      }
    },
    newNoteSubmitBtn: {
      width: '100%',
      backgroundColor: '#40d6a9',
      borderRadius: '10px',
      border:'1px solid black',
      color: 'white',
      '&:hover':{
          backgroundColor:'#44b8db'
      }
    }
  });
  
  export default styles;