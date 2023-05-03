export const { format: formatPrice } = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
});

export const jsonToQueryString = (json) => {
    return Object.keys(json).map(function(key) {
            return encodeURIComponent(key) + '=' +
                encodeURIComponent(json[key]);
        }).join('&');
}
