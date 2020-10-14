import axios from "axios";

const URL = process.env.REACT_APP_INTEGRATOR_API || "http://localhost:3333";

const integratorApi = axios.create({
    baseURL: URL,
})

const integrationsPath = "/api/v1/integrations";

/**
 * Get all integrations
 * 
 * @returns {Promise}
 */
const listIntegrations = () => {
    return integratorApi.get(integrationsPath);
};

/**
 * Create a new integration
 * 
 * @param {string} origin 
 * @param {string} destination 
 * @param {string} experimentURL
 * @returns {Promise}
 */
const createIntegration = (origin, destination, experimentURL) => {
    return integratorApi.post(integrationsPath, {
        origin,
        destination,
        experimentURL 
    })
};

export default {
    listIntegrations,
    createIntegration,
}