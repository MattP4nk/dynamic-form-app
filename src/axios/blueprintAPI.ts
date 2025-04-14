import commsManager from './commsManager';

export default{
    getBlueprint() {
        return commsManager().get('/')
    }
}