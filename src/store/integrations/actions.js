import actionTypes from './actionTypes';
import IntegrationApi from '../../services/IntegratorAPI';

import { message } from 'antd';

/**
 * Get integrations action
 * 
 * @returns {Function}
 */
export const getIntegrationsRequest = () => (dipatch) => {
    dipatch({type: actionTypes.GET_INTEGRATIONS_REQUEST});

    IntegrationApi
    .listIntegrations()
    .then((response) => dipatch(getIntegrationsSuccess(response)))
    .catch((error) => dipatch(getIntegrationsFail(error)))
};

/**
 * Get integrations success action
 * 
 * @param {Object} response 
 * @returns {Function}
 */
const getIntegrationsSuccess = (response) => (dispatch) => {
    const { integrations } = response.data;

    dispatch({type: actionTypes.GET_INTEGRATIONS_SUCCESS, integrations});
};

/**
 * Get integrations fail action
 * 
 * @param {Object} error 
 * @returns {Function}
 */
const getIntegrationsFail = (error) => (dispatch) => {
    const errorMessage = error.message;

    dispatch({type: actionTypes.GET_INTEGRATIONS_FAIL });

    message.error(errorMessage);
};
