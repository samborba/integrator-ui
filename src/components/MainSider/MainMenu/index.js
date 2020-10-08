import React from 'react';
import PropTypes from 'prop-types';

import { Menu } from 'antd';

import './style.less';

const { Item } = Menu;

const MainMenu = ({ itemsList, selectedItems, handleItemClick, className }) => {
  return (
    <Menu
      className={className}
      theme='dark'
      selectedKeys={selectedItems}
      onClick={(e) => handleItemClick(e.key)}
    >
      {itemsList.map(({ icon, title, path }) => (
        <Item key={path} style={{ color: '#ffffff' }}>
          {icon}
          <span>{title}</span>
        </Item>
      ))}
    </Menu>
  );
};

// PROP TYPES
MainMenu.propTypes = {
  /** main menu items object list */
  itemsList: PropTypes.arrayOf(PropTypes.object).isRequired,
  /** main menu selected items strings array */
  selectedItems: PropTypes.arrayOf(PropTypes.string).isRequired,
  /** main menu item click function */
  handleItemClick: PropTypes.func.isRequired,
  /** main menu css class string */
  className: PropTypes.string.isRequired,
};

// EXPORT
export default MainMenu;
