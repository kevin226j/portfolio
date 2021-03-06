export const ResponseHandler = (response, error, data, type = null)=>{
    if(error) {
        return error.message;
    } else {
        return  (type === 'DELETE') ? response.json({message : 'Successfully deleted item'}) : 
                (type === 'PUT') ? response.json({message: 'Successfully updated item'}) : 
                response.json(data); 
    }
}

