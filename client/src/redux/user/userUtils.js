import axios from 'axios';


export const IsUserAdm = async (guid) => {
    try{
        const { data: { isAdm } } = await axios.get('/isUserAdm', { params: { guid } });
        return isAdm;
    } catch (err){
        console.log("Error on checking user priviledges");
        return false;
    }
}