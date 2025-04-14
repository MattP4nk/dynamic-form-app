import commsManager from './commsManager';

export default{
    postForm(form) {
        return commsManager().post('/some-post-endpoint', form)
    }
}