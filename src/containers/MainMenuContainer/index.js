// CORE LIBS
import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

// COMPONENTS
import MainMenu from '../../components/MainSider/MainMenu';

// ITEMS MENU
import itemsMenu from './itemsMenu';

// STATES
const mapStateToProps = (state) => {
  return {
  };
};

/**
 * Main Menu Container.
 * This component is responsible for create a logic container for main menu
 * with route control.
 */
const MainMenuContainer = () => {
  // getting history
  const history = useHistory();
  // getting location
  const location = useLocation();
  // getting path
  const { pathname } = location;

  // HANDLERS
  const itemClickHandler = (path) => history.push(path);

  // RENDER
  return (
    <MainMenu
      itemsList={itemsMenu}
      selectedItems={[pathname]}
      handleItemClick={itemClickHandler}
      className='mainMenu'
    />
  );
};

// EXPORT DEFAULT
export default connect(
  mapStateToProps,
)(MainMenuContainer);
