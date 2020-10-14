import actionTypes from './actionTypes';
import IntegrationApi from '../../services/IntegratorAPI';

import { message } from 'antd';

/**
 * Create integration action
 * 
 * @returns {Function}
 */
export const createIntegrationSuccessRequest = () => (dipatch) => {
    dipatch({type: actionTypes.GET_INTEGRATIONS_REQUEST});

    IntegrationApi
    .listIntegrations()
    .then((response) => dipatch(createIntegrationSuccess(response)))
    .catch((error) => dipatch(createIntegrationFail(error)))
};

/**
 * Create integration success action
 * 
 * @param {Object} response 
 * @returns {Function}
 */
const createIntegrationSuccess = (response) => (dispatch) => {
    const { integrations } = response.data;

    dispatch({type: actionTypes.GET_INTEGRATIONS_SUCCESS, integrations});
};

/**
 * Create integration fail action
 * 
 * @param {Object} error 
 * @returns {Function}
 */
const createIntegrationFail = (error) => (dispatch) => {
    const errorMessage = error.message;

    dispatch({type: actionTypes.GET_INTEGRATIONS_FAIL });

    message.error(errorMessage);
};
