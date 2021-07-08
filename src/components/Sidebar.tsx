import * as React from 'react';
import { GuildIcon, IconStyle, SidebarHeader, SidebarStyle, SidebarContent } from '../utils/styles';
import { Guild } from '../utils/types';
import { History } from 'history';
import { GuildContext } from "../utils/contexts/GuildContext";
type SidebarProperties = {
    guilds: Guild[];
    history: History;
}

export const Sidebar = (props: SidebarProperties) => {
    const {guild, setGuild} = React.useContext(GuildContext);
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