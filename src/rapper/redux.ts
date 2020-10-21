/* md5: 9cc6de84dab0fae6dfc46007e8ab3ef0 */
/* Rap仓库id: 268793 */
/* Rapper版本: 1.1.3 */
/* eslint-disable */
/* tslint:disable */
// @ts-nocheck

/**
 * 本文件由 Rapper 同步 Rap 平台接口，自动生成，请勿修改
 * Rap仓库 地址: http://rap2.taobao.org/repository/editor?id=268793
 */

import {useSelector} from 'react-redux'
import {IModels, IResponseTypes} from './request'
import * as reduxLib from 'rap/runtime/reduxLib'
import {fetch} from './index'

/** 请求types */
export const RequestTypes = {
  'GET/example/1603262772330': [
    'GET/example/1603262772330_REQUEST',
    'GET/example/1603262772330_SUCCESS',
    'GET/example/1603262772330_FAILURE',
  ],

  'GET/todo/list': ['GET/todo/list_REQUEST', 'GET/todo/list_SUCCESS', 'GET/todo/list_FAILURE'],
}

/** store中存储的数据结构 */
interface IRapperStore {
  'GET/example/1603262772330': Array<
    reduxLib.IInterfaceInfo & {
      request: IModels['GET/example/1603262772330']['Req']
      response: IResponseTypes['GET/example/1603262772330']
    }
  >

  'GET/todo/list': Array<
    reduxLib.IInterfaceInfo & {
      request: IModels['GET/todo/list']['Req']
      response: IResponseTypes['GET/todo/list']
    }
  >
}
export type TRapperStoreKey = keyof IRapperStore

export const useResponse = {
  /**
   * 接口名：示例接口
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=268793&mod=418701&itf=1768206
   */
  'GET/example/1603262772330': function useData(
    filter?:
      | {request?: IModels['GET/example/1603262772330']['Req']}
      | {(storeData: IRapperStore['GET/example/1603262772330'][0]): boolean}
  ) {
    type Req = IModels['GET/example/1603262772330']['Req']
    type Item = IRapperStore['GET/example/1603262772330'][0]
    type Res = IResponseTypes['GET/example/1603262772330']
    return reduxLib.useResponseData<TRapperStoreKey, Req, Res | undefined, Item>('GET/example/1603262772330', filter)
  },

  /**
   * 接口名：获取TODO列表
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=268793&mod=418701&itf=1768718
   */
  'GET/todo/list': function useData(
    filter?: {request?: IModels['GET/todo/list']['Req']} | {(storeData: IRapperStore['GET/todo/list'][0]): boolean}
  ) {
    type Req = IModels['GET/todo/list']['Req']
    type Item = IRapperStore['GET/todo/list'][0]
    type Res = IResponseTypes['GET/todo/list']
    return reduxLib.useResponseData<TRapperStoreKey, Req, Res | undefined, Item>('GET/todo/list', filter)
  },
}

export const useAPI = {
  /**
   * 接口名：示例接口
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=268793&mod=418701&itf=1768206
   */
  'GET/example/1603262772330': function useData(
    requestParams?: IModels['GET/example/1603262772330']['Req'],
    extra?: reduxLib.IUseAPIExtra<IModels['GET/example/1603262772330']['Req']>
  ) {
    type Req = IModels['GET/example/1603262772330']['Req']
    type Res = IResponseTypes['GET/example/1603262772330']
    type IFetcher = typeof fetch['GET/example/1603262772330']
    return reduxLib.useAPICommon<TRapperStoreKey, Req, Res | undefined, IFetcher>({
      modelName: 'GET/example/1603262772330',
      fetcher: fetch['GET/example/1603262772330'],
      requestParams,
      extra,
    })
  },

  /**
   * 接口名：获取TODO列表
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=268793&mod=418701&itf=1768718
   */
  'GET/todo/list': function useData(
    requestParams?: IModels['GET/todo/list']['Req'],
    extra?: reduxLib.IUseAPIExtra<IModels['GET/todo/list']['Req']>
  ) {
    type Req = IModels['GET/todo/list']['Req']
    type Res = IResponseTypes['GET/todo/list']
    type IFetcher = typeof fetch['GET/todo/list']
    return reduxLib.useAPICommon<TRapperStoreKey, Req, Res | undefined, IFetcher>({
      modelName: 'GET/todo/list',
      fetcher: fetch['GET/todo/list'],
      requestParams,
      extra,
    })
  },
}

export const useAllResponse = {
  /**
   * 接口名：示例接口
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=268793&mod=418701&itf=1768206
   */
  'GET/example/1603262772330': function useData() {
    return useSelector((state: reduxLib.IState) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['GET/example/1603262772330']) || []
      type TReturnItem = reduxLib.IInterfaceInfo & {
        request?: IModels['GET/example/1603262772330']['Req']
        response?: IResponseTypes['GET/example/1603262772330']
      }
      return selectedState as Array<TReturnItem>
    })
  },

  /**
   * 接口名：获取TODO列表
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=268793&mod=418701&itf=1768718
   */
  'GET/todo/list': function useData() {
    return useSelector((state: reduxLib.IState) => {
      const selectedState = (state['$$rapperResponseData'] && state['$$rapperResponseData']['GET/todo/list']) || []
      type TReturnItem = reduxLib.IInterfaceInfo & {
        request?: IModels['GET/todo/list']['Req']
        response?: IResponseTypes['GET/todo/list']
      }
      return selectedState as Array<TReturnItem>
    })
  },
}

/** 重置接口数据 */
export const clearResponseCache = {
  /**
   * 接口名：示例接口
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=268793&mod=418701&itf=1768206
   */
  'GET/example/1603262772330': (): void => {
    reduxLib.dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/example/1603262772330': undefined},
    })
  },

  /**
   * 接口名：获取TODO列表
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=268793&mod=418701&itf=1768718
   */
  'GET/todo/list': (): void => {
    reduxLib.dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/todo/list': undefined},
    })
  },
}

export const rapperBaseSelector = {
  'GET/example/1603262772330': (
    state: reduxLib.IState,
    filter?:
      | {request?: IModels['GET/example/1603262772330']['Req']}
      | {(storeData: IRapperStore['GET/example/1603262772330'][0]): boolean}
  ) => {
    type Req = IModels['GET/example/1603262772330']['Req']
    type Res = IResponseTypes['GET/example/1603262772330']
    type Item = IRapperStore['GET/example/1603262772330'][0]
    return reduxLib.getResponseData<TRapperStoreKey, Req, Res | undefined, Item>(
      state,
      'GET/example/1603262772330',
      filter
    )
  },
  'GET/todo/list': (
    state: reduxLib.IState,
    filter?: {request?: IModels['GET/todo/list']['Req']} | {(storeData: IRapperStore['GET/todo/list'][0]): boolean}
  ) => {
    type Req = IModels['GET/todo/list']['Req']
    type Res = IResponseTypes['GET/todo/list']
    type Item = IRapperStore['GET/todo/list'][0]
    return reduxLib.getResponseData<TRapperStoreKey, Req, Res | undefined, Item>(state, 'GET/todo/list', filter)
  },
}

export const rapperDataSelector = {
  'GET/example/1603262772330': (state: reduxLib.IState) => {
    type Res = IResponseTypes['GET/example/1603262772330']
    return reduxLib.getRapperDataSelector<TRapperStoreKey, Res>(state, 'GET/example/1603262772330')
  },
  'GET/todo/list': (state: reduxLib.IState) => {
    type Res = IResponseTypes['GET/todo/list']
    return reduxLib.getRapperDataSelector<TRapperStoreKey, Res>(state, 'GET/todo/list')
  },
}

export const rapperActions = RequestTypes || []
