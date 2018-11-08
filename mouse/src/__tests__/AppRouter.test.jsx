import React from 'react';
import expect from 'expect';
import renderer from 'react-test-renderer';
import SideBar from "../src/SideBar.jsx";
import AppRouter from "../src/AppRouter.jsx";

let routeList;

describe('AppRouter', () => {
  let routeWrapper;
  let routeArray;
  before(()=>{
    routeWrapper = shallow(<AppRouter />);
    routeArray = routeWrapper.getElements();
    for (var component in routeArray) {
      routeList.add(component);
    }
  });
});

it('AppRouter renders routes', () => {
  expect(routeArray.find('listItems').length).toEqual(list.length);
});

describe('List', () => {
  let list;
  beforeEach(()=>{
    list = shallow(<List>{MailFolderListItems()}</List>);
 });
});

it('List renders table', () => {
  expect(list.find('listItems').length).toEqual(list.length);
});

it('Routes identified and confirmed', () => {
  for(var ListItem in list)
  {
    for(var Route in routeList)
    {
    //ListItem.getElements(). //ToDo: get custom data from ListItems Continue: cross checking ListItem data to RouteList paths
    }
  }
});
