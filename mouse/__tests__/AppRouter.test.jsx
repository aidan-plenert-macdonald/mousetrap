import React from 'react';
import renderer from 'react-test-renderer';
import SideBar from "../src/SideBar.jsx";
import AppRouter from "../src/AppRouter.jsx";

describe('List', () => {
	let list;

	beforeEach(() => {
	list = shallow(<List>{MailFolderListItems()}</List>);
	});
	
});

it('List renders table', () => {
  expect(list.find('listItems').length).toEqual(list.length);
});

describe('AppRouter', () => {
  let routeWrapper;
  let routeArray;
  let routeList;

  before(() => {
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