import React from 'react';

const styles = {
  err: {
    color: 'red'
  }
}

export const Error = ({msg}) => {
  return <div style={styles.err}>{msg}</div>;
}
