import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import SideBar from '../SideBar';
import AppRouter from '../AppRouter';

let routeList;
let routeArray;
let list;

describe('AppRouter', () => {
  let routeWrapper;
  before(() => {
    routeWrapper = shallow(<AppRouter />);
    routeArray = routeWrapper.getElements();
    for (const component in routeArray) {
      routeList.add(component);
    }
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
    for (const ListItem in list) {
      for (const Route in routeList) {
      // ListItem.getElements(). //ToDo: get custom data from ListItems 
      //Continue: cross checking ListItem data to RouteList paths
      }
    }
  });
});