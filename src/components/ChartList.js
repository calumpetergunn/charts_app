import SongItem from './SongItem';

const ChartList = ({songs, loaded}) => {
if(!loaded){
    return(
        <p>Loading, one moment please!</p>
    )
}

    const songItems = songs.map((song) => {
        return(
            <SongItem class="song-item" song={song} />
        )
    })
    return (
        <>
            <ol>
                {songItems}
            </ol>
        </>
    );
}

export default ChartList;