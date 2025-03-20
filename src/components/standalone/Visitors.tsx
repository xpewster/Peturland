import Standalone from "./Standalone"

export const Visitors = (): React.ReactElement => {

    const countries = [
        'US', // United States
        'CA', // Canada
        'AU', // Australia
        'RU', // Russia
        'EN', // England (Note: Not an official ISO code, GB or UK is used for United Kingdom)
        'FR', // France
        'DE', // Germany
        'NL', // Netherlands
        'PL', // Poland
        'IT', // Italy
        'ES', // Spain
        'UA', // Ukraine
        'BR', // Brazil
        'AR', // Argentina
        'JP', // Japan
        'EG', // Egypt
    ];
    
    return <Standalone>
        <div style={{marginLeft: '10px', marginRight: '10px'}}>
            <a href="https://info.flagcounter.com/ImIH" target="_blank" rel="noopener noreferrer"><img className='rbarbox' src="https://s05.flagcounter.com/count/ImIH/bg_FFD21F/txt_004502/border_B8B8B8/columns_2/maxflags_20/viewers_0/labels_0/pageviews_0/flags_0/percent_0/" alt="Flag Counter" style={{
                outline: 0,
                width: '150px',
            }} /></a>
            {countries.map((country) => {
                return <img className='rbarbox' src={`https://s05.flagcounter.com/count_${country}/ImIH/bg_FFD21F/txt_004502/border_B8B8B8/columns_2/maxflags_20/viewers_0/labels_0/pageviews_0/flags_0/percent_0/`} alt="Flag Counter" style={{
                    outline: 0,
                    width: '150px',
                }} />
            })}
        </div>
    </Standalone>;
}

export default Visitors;
