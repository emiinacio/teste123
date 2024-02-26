

/**
* Generated by ExoCoding 0.0.1
*/

import { AxiosRequestConfig } from 'axios';
import { axios } from '@/lib/axios';
import { Page } from '@/types';
import { TABLE3Obj } from '@/modules/main/types';
import { TABLE3ObjDTO } from '.';

/**
* Create one TABLE3Obj
*
* @param {body} CRUD object input parameter
* @param {options} Override http request option. */
export const postTABLE3Obj = (body: TABLE3ObjDTO, options: AxiosRequestConfig = {}): Promise<any> => {
    return axios.post(`/table3obj`, body, options);
};

/**
* Update one TABLE3Obj
*
* @param {idTABLE3} CRUD key input parameter
* @param {body} CRUD object input parameter
* @param {options} Override http request option.
* @returns TABLE3Obj */
export const putTABLE3Obj = (idTABLE3:  number, body: TABLE3ObjDTO, options: AxiosRequestConfig = {}): Promise<TABLE3Obj> => {
    return axios.put(`/table3obj/{idtable3}`, body, options);
};

/**
* Read one TABLE3Obj
*
* @param {idTABLE3} CRUD key input parameter
* @param {options} Override http request option.
* @returns TABLE3Obj */
export const getTABLE3Obj = (idTABLE3:  number, options: AxiosRequestConfig = {}): Promise<TABLE3Obj> => {
    return axios.get(`/table3obj/{idtable3}`, options);
};

/**
* Delete one TABLE3Obj
*
* @param {idTABLE3} CRUD key input parameter
* @param {options} Override http request option.
* @returns TABLE3Obj */
export const deleteTABLE3Obj = (idTABLE3:  number, options: AxiosRequestConfig = {}): Promise<any> => {
    return axios.delete(`/table3obj/{idtable3}`, options);
};
