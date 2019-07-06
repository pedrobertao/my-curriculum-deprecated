import React from 'react';
import { Menu } from 'semantic-ui-react';

import MenuMobile from './MenuMobile';
import MenuDesktop from './MenuDesktop';

export default (props) => {
    let menu = window.innerWidth < 600 
    ? <MenuMobile SideBarHandler={props.SideBarHandler} /> 
    : <MenuDesktop SideBarHandler={props.SideBarHandler} />

    return <Menu fixed="top" inverted>{menu}</Menu>
}

