import parseFile from "../info/api"

async function fetchParsedData( ) {
    const parsedData = await parseFile()
    return parsedData;
}


export const getInfoById = ( id = '' ) => {
    const data = fetchParsedData( )
    return fetchParsedData( people => people.id === id );
}

