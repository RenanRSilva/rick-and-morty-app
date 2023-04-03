export const selectStyles = {
  textAlign: 'start',
  color: '#fff',
  background: 'none',
  marginTop: '10px',
  marginBottom: '10px',
  borderRadius: '8px',
  width: '100%',
  minWidth: 135,

  '&:hover': {
    '&& fieldset': {
      borderColor: '#90c747',
    },
  },

  '& .MuiOutlinedInput-notchedOutline': {
    color: '#90c747',
    borderColor: '#90c747',
  },
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    color: '#90c747',
    borderColor: 'MuiOutlinedInput-notchedOutline',
  },
  fieldset: {
    border: '1px solid ' + '#fff',
    borderRadius: '16px',
  },
  '& .Mui-selected': {
    background: 'none',
  },
  '& .MuiSvgIcon-root': {
    color: '#90c747',
  },
  '& MuiOutlinedInput-input': {
    color: '#90c747',
  },
  '& label.Mui-focused': {
    color: '#90c747',
  },
  '& .MuiOutlinedInput-root': {
    color: '#90c747',
    border: '2px solid gray',

    '&.Mui-focused fieldset': {
      color: '#90c747',
      borderColor: '#90c747',
    },
  },
};

export const selectLabelStyles = {
  color: '#fff',
  top: 10,

  '&.Mui-focused': {
    color: '#90c747',
  },
};

export const inputStyles = {
  marginTop: '10px',
  marginBottom: '10px',
  border: 'none',
  width: '100%',
  color: '#fff',
  '& .MuiInputLabel-root': {
    color: '#fff',
  },
  '& .MuiSvgIcon-root': {
    color: '#90c747',
  },
  fieldset: {
    border: '1px solid ' + '#90c747',
    borderRadius: '16px',
  },
  '& MuiOutlinedInput-input': {
    color: '#fff',
  },
  '& label.Mui-focused': {
    color: '#90c747',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#90c747',
  },
  '& .MuiOutlinedInput-root': {
    color: '#fff',
    '& fieldset': {
      color: '#fff',
      borderColor: '#90c747',
    },
    '&:hover fieldset': {
      color: '#fff',
      borderColor: '#90c747',
    },
    '&.Mui-focused fieldset': {
      color: '#fff',
      borderColor: '#90c747',
    },
  },
};
