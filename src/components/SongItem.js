import './SongItem.css'
const SongItem = ({song}) => {
    return (
        <li class="song-item">
            <h3>{song.title.label}</h3>
            <a href={song.id.label}>
            <img src={song["im:image"][1].label} alt="songimage" />
            </a>
        </li>
    );
}

export default SongItem;