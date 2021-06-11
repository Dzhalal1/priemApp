import {Storage} from '@ionic/storage';

const store = new Storage();
const storage = async () => await store.create()
export default storage;