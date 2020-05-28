import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { RouteWithLayout } from './components';
import { Main as MainLayout, Minimal as MinimalLayout } from './layouts';

import {

   Leave as LeaveView,
  UserList as UserListView,
  Employeeloglist as EmployeeloglistView,
  Leaveloglist as LeaveloglistView,
  Settings as SettingsView,
  SignUp as SignUpView,
  SignIn as SignInView,
  NotFound as NotFoundView
} from './views';

const Routes = () => {
  return (
    <Switch>
      <Redirect
        exact
        from="/"
        to="/users"
      />
     
      <RouteWithLayout
        component={UserListView}
        exact
        layout={MainLayout}
        path="/users"
      />
      <RouteWithLayout
        component={LeaveView}
        exact
        layout={MainLayout}
        path="/leaves"
      />
      <RouteWithLayout
        component={EmployeeloglistView}
        exact
        layout={MainLayout}
        path="/Emplog"
      />
      <RouteWithLayout
        component={LeaveloglistView}
        exact
        layout={MainLayout}
        path="/leavelog"
      />
      <RouteWithLayout
        component={SettingsView}
        exact
        layout={MainLayout}
        path="/settings"
      />
      <RouteWithLayout
        component={NotFoundView}
        exact
        layout={MinimalLayout}
        path="/not-found"
      />
      <Redirect to="/not-found" />
    </Switch>
  );
};

export default Routes;
