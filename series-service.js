export const getEpisodeTitle=(show, seasonIndex, episodeIndex)=>{
    return show.seasons[seasonIndex].episodes[episodeIndex].title;
};

export const getLastSeasonNumber=(show)=>{
    if(show.seasons.length==0)
        return 0;
    else
        return show.seasons[show.seasons.length-1].number;
};

export const getNextSeasonYear=(show)=>{
    return show.nextSeason?.year??"No announcement";
};