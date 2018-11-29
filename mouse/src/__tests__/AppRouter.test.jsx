import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
// import renderer from 'react-test-renderer';
// import SideBar from '../SideBar';
import List from '@material-ui/core/List';
import MailFolderListItems from '../tileData';
import AppRouter from '../AppRouter';

let routeList;
let routeArray;
let list;

describe('AppRouter', () => {
  let routeWrapper;
  beforeEach(() => {
    routeWrapper = shallow(<AppRouter />);
    routeArray = routeWrapper.getElements();
    Object.entries(routeArray).forEach(([key, value]) => {
      routeList.add(value);
    });
  });

  it('AppRouter renders routes', () => {
    expect(routeArray.find('listItems').length).toEqual(list.length);
  });
});

describe('List', () => {
  beforeEach(() => {
    list = shallow(<List>{MailFolderListItems()}</List>);
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
