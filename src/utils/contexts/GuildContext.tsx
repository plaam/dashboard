import { Guild } from '../types';
import { createContext } from 'react';

type GuildContextType = {
    guild?: Guild;
    setGuild: Function;
};

export const GuildContext = createContext<GuildContextType>({
    guild: undefined,
    setGuild: () => {},
});

export const GuildContextProvider = GuildContext.Provider;