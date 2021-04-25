export const getNewAddressState=(addressObject:any)=> {
    let NewAddressState = {street: "", home: "", district: "", locality: "", area: "", region: "", country: "",}
    // @ts-ignore
    for (const component of addressObject.address_components as google.maps.GeocoderAddressComponent[]) {
        const componentType = component.types[0];
    switch (componentType) {
        case "street_number": {
            NewAddressState.home = component.long_name
            break;
        }
        case "route": {

            NewAddressState.street = component.long_name
            break;
        }
        case "sublocality_level_1": {
            NewAddressState.district = component.long_name
            break;
        }
        case "locality": {
            NewAddressState.locality = component.long_name
            break;
        }
        case "administrative_area_level_2": {
            NewAddressState.area = component.long_name
            break;
        }
        case "administrative_area_level_1": {
            NewAddressState.region = component.long_name
            break;
        }
        case "country": {
            NewAddressState.country = component.long_name
            break;
        }
    }
}
return NewAddressState
}