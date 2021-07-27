const { requestCall } = require("helpers/requestCall");
const { endpoint } = require("./endpoint");

export const login = (payload) => {
    const response = requestCall(endpoint.login, 'POST', payload);
    console.log('response:login', response);

    const data = response.data;

    return data;
}