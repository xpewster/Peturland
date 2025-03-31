import Standalone from "./Standalone"

export const Credits = (): React.ReactElement => {

    const credits = [
        ['max_jpg', 'https://www.fiverr.com/max_jpg', 'left sidebar buttons'],
        ['Dakedres', 'https://gist.github.com/Dakedres', 'Windows 98 styled sidebar css'],
        ['The 88x31 Gif Collection', 'https://cyber.dabamos.de/88x31/index4.html', 'some of the 88x31s'],
        ['gifcities', 'https://gifcities.org/', 'animated gifs used in the site'],
        ['99gifshop', 'https://99gifshop.com/', 'more animated gifs used in the site'],
        ['cinni', 'https://cinni.net/font', 'basiic font'],
        ['neet-chan', 'https://neet-chan.tumblr.com/', 'neet girl picture']
    ]
    
    return <Standalone>
        <div style={{paddingLeft: '5px', paddingRight: '5px',}}>
            {credits.map(([name, url, desc], index) => (
                <p style={{margin: '4px'}}>
                    <a href={url} target="_blank" rel="noopener noreferrer" key={index}>{name}</a> for the {desc}!
                </p>
            ))}
        </div>
    </Standalone>;
}

export default Credits;
