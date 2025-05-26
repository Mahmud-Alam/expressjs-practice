import express from 'express'
import { startups } from './data/data.js';

const PORT = 8000;

const app = express();

app.listen(PORT, ()=>console.log(`Server is running on PORT ${PORT}`));

app.get('/api',(req, res)=>{
    let filterData = startups;
    
    if(req.query){
        Object.entries(req.query).forEach(([key,value])=>{
            filterData = filterData.filter(data=>{
                if (!(key in data)) return false;
                return String(data[key]).toLowerCase() === String(value).toLowerCase();
            })
        })
    }
    
    res.statusCode = 200
    res.json(filterData)
})

app.get('/api/:key/:value', (req, res)=>{
    let filterData = startups;

    filterData = filterData.filter(data=>{
        return String(data[req.params.key]).toLowerCase() === String(req.params.value).toLowerCase();
    })
    
    res.json(filterData)
    
})

