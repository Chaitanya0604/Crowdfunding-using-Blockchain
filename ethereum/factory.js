import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0xC27560F3Bb03f4684FC7080aB07f96cEC8E54632'
)

export default instance;
