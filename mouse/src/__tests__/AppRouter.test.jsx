import React from 'react';
import { shallow, mount } from 'enzyme';
import List from '@material-ui/core/List';
import MailFolderListItems from '../tileData';
import AppRouter from '../AppRouter';

describe('AppRouter', () => {
  let routeWrapper;
  let routeArray;
  let list;
  beforeEach(() => {
    routeWrapper = mount(<AppRouter />);
    routeArray = routeWrapper.find(element => element === '<div>').find(element => element === '<Router>').find(element => element === '<Switch>').getElements();
    routeArray.map(this.props.path);
    list = shallow(<List>{MailFolderListItems()}</List>);
  });

  it('AppRouter renders routes', () => {
    expect(routeArray.find('listItems').length).toEqual(list.length);
  });

  it('List renders table', () => {
    expect(list.find('listItems').length).toEqual(list.length);
  });

  it('Routes identified and confirmed', () => {
    // for (const ListItem in list) {
    //   for (const Route in routeList) {
    //     ListItem.getElements(). //ToDo: get custom data from ListItems
    //     Continue: cross checking ListItem data to RouteList paths
    //   }
    // }
  });
});
