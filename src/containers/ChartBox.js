import {useState, useEffect} from 'react';
import ChartList from '../components/ChartList';

const ChartBox = () => {

    const [songs, setSongs] = useState([]);
    const [loaded, setLoaded] = useState(false);

    const getSongs = () => {
        fetch(`https://itunes.apple.com/gb/rss/topsongs/limit=20/json`)
        .then(res => res.json())
        .then(data => setSongs(data["feed"]["entry"]))
        .then(() => setLoaded(true))
    }

    useEffect(()=> {
        getSongs()
    }, [])

    return(
        <>
            <h1>Top Charts of Wonderful Hits!</h1>
            <ChartList songs={songs} loaded={loaded}/>
        </>
    )
}
export default ChartBox;