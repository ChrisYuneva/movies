export interface PlatformTypeOption {
    title: string;
    value: string;
}

export interface FilterParams {
    platform: string;
    category: string;
    'sort-by': string;
}

export interface FilterTagParams {
    platform: string;
    tag: string;
    'sort-by': string;
}

export interface OptionsType {
    title: string;
    value: string;
}

export const platforms: PlatformTypeOption[] = [
    { title: 'Pc', value: 'pc' },
    { title: 'Browser', value: 'browser' },
    { title: 'All', value: 'all' }
];

export const categories: PlatformTypeOption[] = [
    { title: 'Mmorpg', value: 'mmorpg' },
    { title: 'Shooter', value: 'shooter' },
    { title: 'Strategy', value: 'strategy' },
    { title: 'Moba', value: 'moba' },
    { title: 'Racing', value: 'racing' },
    { title: 'Sports', value: 'sports' },
    { title: 'Social', value: 'social' },
    { title: 'Sandbox', value: 'sandbox' },
    { title: 'Open-world', value: 'open-world' },
    { title: 'Survival', value: 'survival' },
    { title: 'Pvp', value: 'pvp' },
    { title: 'Pve', value: 'pve' },
    { title: 'Pixel', value: 'pixel' },
    { title: 'Voxel', value: 'voxel' },
    { title: 'Zombie', value: 'zombie' },
    { title: 'Turn-based', value: 'turn-based' },
    { title: 'First-person', value: 'first-person' },
    { title: 'Third-Person', value: 'third-Person' },
    { title: 'Top-down', value: 'top-down' },
    { title: 'Tank', value: 'tank' },
    { title: 'Space', value: 'space' },
    { title: 'Sailing', value: 'sailing' },
    { title: 'Side-scroller', value: 'side-scroller' },
    { title: 'Superhero', value: 'superhero' },
    { title: 'Permadeath', value: 'permadeath' },
    { title: 'Card', value: 'card' },
    { title: 'Battle-royale', value: 'battle-royale' },
    { title: 'Mmo', value: 'mmo' },
    { title: 'Mmofps', value: 'mmofps' },
    { title: 'Mmotps', value: 'mmotps' },
    { title: '3d', value: '3d' },
    { title: '2d', value: '2d' },
    { title: 'Anime', value: 'anime' },
    { title: 'Fantasy', value: 'fantasy' },
    { title: 'Sci-fi', value: 'sci-fi' },
    { title: 'Fighting', value: 'fighting' },
    { title: 'Action-rpg', value: 'action-rpg' },
    { title: 'Action', value: 'action' },
    { title: 'Military', value: 'military' },
    { title: 'Martial-arts', value: 'martial-arts' },
    { title: 'Flight', value: 'flight' },
    { title: 'Low-spec', value: 'low-spec' },
    { title: 'Tower-defense', value: 'tower-defense' },
    { title: 'Horror', value: 'horror' },
    { title: 'Mmorts', value: 'mmorts' }
];
