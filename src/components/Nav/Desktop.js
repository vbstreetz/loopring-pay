import React from 'react';
import { connect } from 'react-redux';
import * as mapDispatchToProps from 'actions';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { Paper, Tabs, Tab } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import { Switcher, ROUTE_LABELS, ROUTES } from './routes';
// import { history } from 'utils/store';
import SetupAccount from 'components/SetupAccount';

const useStyles = makeStyles(theme => ({
  container: {
    position: 'relative',
    paddingTop: 100,
  },
  paper: {
    width: 960,
  },
  paperHeading: {
    background: theme.palette.isDark ? '#303030' : '#eee',
  },
  paperBody: {
    padding: '30px 0 50px',
  },
}));

function Component({ locationPathName, match }) {
  const classes = useStyles();

  let activeTab = ROUTES.indexOf(locationPathName);
  activeTab = -1 === activeTab ? 0 : activeTab;

  const handleActiveTabChange = (event, newValue) => {
    const hash = `${newValue ? ROUTES[newValue] : ''}`.replace('/', '');
    // console.log(hash);
    // history.push({ hash });
    window.location.hash = hash;
  };

  return (
    <div className={clsx('flex flex--justify-center', classes.container)}>
      <Paper className={clsx(classes.paper)}>
        <SetupAccount>
          <>
            <div
              className={clsx(
                classes.paperHeading,
                'flex',
                'flex--grow',
                'flex--align-center',
                'flex--justify-center'
              )}
            >
              <Tabs
                value={activeTab}
                indicatorColor="secondary"
                textColor="inherit"
                onChange={handleActiveTabChange}
                aria-label="tabs"
              >
                {ROUTE_LABELS.map(label => (
                  <Tab className={classes.tab} key={label} {...{ label }} />
                ))}
              </Tabs>
            </div>
            <div className={classes.activeTabContent}>
              <Switcher />
            </div>
          </>
        </SetupAccount>
      </Paper>
    </div>
  );
}

export default withRouter(
  connect((s, { match }) => {
    return {
      locationPathName: window.location.hash.replace('#/', '/'),
    };
  }, mapDispatchToProps)(Component)
);
