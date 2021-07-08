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
            {menuItems('channel').map((item) => (
                <MenuCategory key = {item.name}>
                    <span>{item.name}</span>
                    {item.routes.map((route) => (
                       <MenuCategoryItem key={route.name} onClick={() => props.history.push(route.path)}>
                            <span># {route.name}</span>
                       </MenuCategoryItem> 
                    ))}
                </MenuCategory>
            ))}
        </MenuContent>
    </MenuStyle>
    );
};