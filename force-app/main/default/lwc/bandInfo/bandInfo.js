import { LightningElement } from 'lwc';

export default class BandInfo extends LightningElement {

bands = [
    {
        name: 'Evanescence', description: 'an American rock band founded in Little Rock, Arkansas in 1995 by singer and musician Amy Lee and guitarist Ben Moody',
        image: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/7163tf7rbLL._SL1400_.jpg',
    },
    {
        name: 'Linkin Park', description: 'an American rock band from Agoura Hills, California. The bands current lineup comprises vocalist/rhythm guitarist/keyboardist Mike Shinoda, lead guitarist Brad Delson, bassist Dave Farrell, DJ/turntablist Joe Hahn and drummer Rob Bourdon, all of whom are founding members',
        image: 'https://www.nme.com/wp-content/uploads/2016/09/2012LinkinParkPR180412-1-696x464.jpg',
    },
    {
        name: 'Disturbed', description: 'an American heavy metal band from Chicago, formed in 1994. The band includes vocalist David Draiman, guitarist/keyboardist Dan Donegan, bassist John Moyer, and drummer Mike Wengren',
        image: 'https://primarywave.com/wp-content/uploads/2020/11/dist.jpg',
    },
];
}