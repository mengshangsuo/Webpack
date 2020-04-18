import axios from 'axios'

axios.get('/api/info').then(res=>{
    console.log(res);
});

function a(){
    console.log('a');
}

export default a;