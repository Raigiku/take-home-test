import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  IconButton,
  Typography,
} from '@mui/material';
import React from 'react';
import { GithubCommit } from '../page/home-page/home-page.state';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CodeIcon from '@mui/icons-material/Code';
import RefreshIcon from '@mui/icons-material/Refresh';

type Props = {
  commits: GithubCommit[];
  isLoadingCommits?: boolean;
  onClickRefreshCommits: () => void;
};

const GithubCommits = (props: Props) => {
  const renderNoResultsFound =
    props.commits.length === 0 && props.isLoadingCommits !== undefined;
  const renderCommits = props.commits.length > 0;

  return (
    <React.Fragment>
      {renderNoResultsFound ? (
        <Grid item xs={12} textAlign='center'>
          <Typography variant='h6'>Nothing found</Typography>
        </Grid>
      ) : (
        renderCommits && (
          <React.Fragment>
            <IconButton
              color='primary'
              size='large'
              sx={{ backgroundColor: '#EEEEEE' }}
              onClick={props.onClickRefreshCommits}
            >
              <RefreshIcon />
            </IconButton>
            {props.commits.map((c) => (
              <Grid key={c.hash} item xs={12}>
                <Card>
                  <CardHeader
                    avatar={
                      <a href={c.author.profileHtmlUrl}>
                        <Avatar src={c.author.pictureUrl} />
                      </a>
                    }
                    title={
                      <a
                        href={c.author.commitsHtmlUrl}
                        style={{ textDecoration: 'none' }}
                      >
                        {c.author.name}
                      </a>
                    }
                    subheader={c.creationDate.toLocaleString()}
                  />
                  <CardContent>
                    <a
                      href={c.htmlUrl}
                      style={{
                        textDecoration: 'none',
                        color: 'black',
                        whiteSpace: 'pre-line',
                      }}
                    >
                      {c.message}
                    </a>
                  </CardContent>
                  <CardActions>
                    <Button
                      onClick={() => {
                        navigator.clipboard.writeText(c.hash);
                      }}
                    >
                      <ContentCopyIcon />
                      Copy
                    </Button>
                    <a href={c.htmlUrl} style={{ textDecoration: 'none' }}>
                      <Button>{c.hash.substring(0, 7)}</Button>
                    </a>
                    <a href={c.repositoryAtThisPointHtmlUrl}>
                      <CodeIcon />
                    </a>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </React.Fragment>
        )
      )}
    </React.Fragment>
  );
};

export default GithubCommits;
