/* md5: bf97b68ff9147f0d9ec3699865175bb1 */
/* Rap仓库id: 268793 */
/* Rapper版本: 1.1.3 */
/* eslint-disable */
/* tslint:disable */
// @ts-nocheck

/**
 * 本文件由 Rapper 同步 Rap 平台接口，自动生成，请勿修改
 * Rap仓库 地址: http://rap2.taobao.org/repository/editor?id=268793
 */

import {createFetch, IModels} from './request'
import * as commonLib from 'rap/runtime/commonLib'

import {
  useResponse,
  useAPI,
  useAllResponse,
  clearResponseCache,
  rapperActions,
  rapperBaseSelector,
  rapperDataSelector,
} from './redux'
import {IResponseTypes} from './request'
import * as reduxLib from 'rap/runtime/reduxLib'

const {defaultFetch} = commonLib
let fetch = createFetch({}, {fetchType: commonLib.FetchType.BASE})

const {rapperReducers, rapperEnhancer} = reduxLib

export const overrideFetch = (fetchConfig: commonLib.RequesterOption) => {
  fetch = createFetch(fetchConfig, {fetchType: commonLib.FetchType.AUTO})
}
export {fetch, createFetch, defaultFetch}
export type Models = IModels

export {
  /** 以Hooks的方式使用请求响应数据 */
  useResponse,
  useAPI,
  /** 使用请求响应数据（包含缓存） */
  useAllResponse,
  /** 清除此接口的缓存 */
  clearResponseCache,
  rapperBaseSelector,
  rapperDataSelector,
  rapperActions,
  rapperReducers,
  rapperEnhancer,
}

/** 响应类型 */
export type ResponseTypes = IResponseTypes
