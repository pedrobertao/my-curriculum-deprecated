import React, { useState } from 'react';
import { Menu } from 'semantic-ui-react';

import MenuMobile from './MenuMobile';
import MenuDesktop from './MenuDesktop';

export default (props) => {
    const [isMobile, changeIsMobile] = useState(window.innerWidth < 600)
    window.onresize = ()=> {
        if (window.innerWidth < 600 && !isMobile)  {
            changeIsMobile(true)
        } else if(window.innerWidth >= 600 && isMobile) {
            changeIsMobile(false)
        }
    }
    const menu = isMobile
    ? <MenuMobile SideBarHandler={props.SideBarHandler} /> 
    : <MenuDesktop SideBarHandler={props.SideBarHandler} />

    return <Menu fixed="top" inverted>{menu}</Menu>
}

