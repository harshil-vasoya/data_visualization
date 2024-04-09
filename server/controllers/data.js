const Data = require('../models/data');
exports.getAllData = async (req, res) => {
    
    try{
    const data = await Data.find({});
    res.json({ status: "OK", data: data });
    }
    catch(error){
        res.json({ status: "X", message: "something went wrong in getting data", error });
    }
}

exports.getDataById = async (req, res) => {
    try{
    const data = await Data.findById(req.params.id);
    res.json({ status: "OK", data: data });
    }
    catch(error){
        res.json({ status: "X", message: "something went wrong in getting data", error });
    }
}

// Node.js Express route for pagination


exports.getDataByPage = async (req, res) => {
    const { topic, country, region, pestle, sector} = req.query;
    const query = {};
    const  {end_year}=(req.query);
    const temp_1 = Number(end_year);
    if(end_year>0)
    {
        query.end_year = temp_1;
    }
    if(topic)
    {
        query.topic = topic;
    }
    if(country)
    {
        query.country = country;
    }
    if(region)
    {
        query.region = region;
    }
    if(pestle)
    {
        query.pestle = pestle;
    }
    if(sector)
    {
        query.sector = sector;
    }
    // console.log("get data by page");
    try{
    const {page} = req.query.page;
    const pageSize = 40;
    const startIndex = (page - 1) * pageSize;
    const endIndex = page * pageSize;
    const data = await Data.find(query).skip(startIndex).limit(pageSize);

    res.json({ status: "OK", data: data });
    }
    catch(error){
        res.json({ status: "X", message: "something went wrong in getting data", error });
    }
}


//all unique items

exports.allItems = async (req, res) => {
    try{
        const item  = req.params.item;
        const data = await Data.find({});
        let uniqueItems = [];
        data.forEach((i) => {
            if (!uniqueItems.includes(i[item]) && i[item] !== "") {
                uniqueItems.push(i[item]);
            }
        })
        res.json({ status: "OK", data: uniqueItems });
    }
    catch(error){
        res.json({ status: "X", message: "something went wrong in getting data", error });
    }
}
//all unique Countries
exports.allCountry = async (req, res) => {
    try{
    const data = await Data.find({});
    let uniqueCountry = [];
    data.forEach((i) => {
        if (!uniqueCountry.includes(i.region) && i.region !== "") {
            uniqueCountry.push(i.region);
        }
    })
    res.json({ status: "OK", data: uniqueCountry });
    }
    catch(error){
        res.json({ status: "X", message: "something went wrong in getting data", error });
    }
}

//all unique pestels
exports.allPestels = async (req, res) => {
    try{
    const data = await Data.find({});
    let uniquePestels = [];
    data.forEach((i) => {
        if (!uniquePestels.includes(i.pestel) && i.pestel !== "") {
            uniquePestels.push(i.pestel);
        }
    })
    res.json({ status: "OK", data: uniquePestels });
    }
    catch(error){
        res.json({ status: "X", message: "something went wrong in getting data", error });
    }
}
//all unique sectors
exports.allSectors = async (req, res) => {
    try{
    const data = await Data.find({});
    let uniqueSectors = [];
    data.forEach((i) => {
        if (!uniqueSectors.includes(i.sector) && i.sector !== "") {
            uniqueSectors.push(i.sector);
        }
    })
    res.json({ status: "OK", data: uniqueSectors });
    }
    catch(error){
        res.json({ status: "X", message: "something went wrong in getting data", error });
    }
}


//add Data
exports.addData = async (req, res) => {
    try{
    const data = await Data.create(req.body);
    res.json({ status: "OK", data: data });
    }
    catch(error){
        res.json({ status: "X", message: "something went wrong in adding data", error });
    }
}