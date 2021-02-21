import * as React from 'react';
import { menuItems } from '../utils/constants';
import { MenuStyle, MenuHeader, MenuContent, MenuCategory, MenuCategoryItem } from '../utils/styles';
import { History } from "history";
type MenuProperties = {
    history: History;
};

export const Menu = (props: MenuProperties) => {
    return (
    <MenuStyle>
        <MenuHeader>
            <span>Discord Bot Dashboard</span>
        </MenuHeader>
        <MenuContent>
            {menuItems('123').map((item) => (
                <MenuCategory key = {item.name}>
                    <span>{item.name}</span>
                    {item.routes.map((route) => (
                       <MenuCategoryItem key={route.name}>
                            <span># {route.name}</span>
                       </MenuCategoryItem> 
                    ))}
                </MenuCategory>
            ))}
        </MenuContent>
    </MenuStyle>
    );
};