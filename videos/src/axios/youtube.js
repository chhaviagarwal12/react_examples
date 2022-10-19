import axios from 'axios'


const KEY='AIzaSyB5z2pCxxwVLqE6Bwmsl-BwTghoPwgXlzs'
export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        type:'videos',
        maxResults:5,
        key:KEY,
    
    }
})