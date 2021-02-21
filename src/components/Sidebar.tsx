import * as React from 'react';
import { GuildIcon, IconStyle, SidebarHeader, SidebarStyle, SidebarContent } from '../utils/styles';
import { Guild } from '../utils/types';

type SidebarProperties = {
    guilds: Guild[];
}

export const Sidebar = (props: SidebarProperties) => {
    return (
    <SidebarStyle>
        <SidebarHeader>
            <IconStyle />
        </SidebarHeader>
        <SidebarContent>
            {props.guilds.map((guild) => (
                <GuildIcon key={guild.id}/>
            ))}
        </SidebarContent>
    </SidebarStyle>
    );
};