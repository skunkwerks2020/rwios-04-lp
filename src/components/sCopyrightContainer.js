import React from "react";
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

function CopyrightContainer() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://rwinventory.co/">
        Inventory OS
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default CopyrightContainer;
