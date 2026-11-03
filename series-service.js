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

export const getById=(series, id)=>{
    return series.find(i=>i.id===id);
};

export const getSeasonsCount=(series)=>{
    return series.map(movie=>({title:movie.title,seasons:movie.seasons.length}));
};

export const hasTopEpisode=(show, minRating)=>{
    return show.seasons.some(ratings=>
        ratings.episodes.some(i=>i.rating>=minRating)
    );
};

export const  getCreatorsFrom=(series, country)=>{
    return series.filter(i=>
        i.creator.country===country).map(show=>show.creator.name);
};

export const sortByStartYear=(series)=>{
    return series.map(show=>show).sort((a,b)=>a.startYear-b.startYear)
};