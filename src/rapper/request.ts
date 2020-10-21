/* md5: 77df30206ca1559d62219a57a28f5260 */
/* Rap仓库id: 268793 */
/* Rapper版本: 1.1.3 */
/* eslint-disable */
/* tslint:disable */
// @ts-nocheck

/**
 * 本文件由 Rapper 同步 Rap 平台接口，自动生成，请勿修改
 * Rap仓库 地址: http://rap2.taobao.org/repository/editor?id=268793
 */

import * as commonLib from 'rap/runtime/commonLib'
import * as reduxLib from 'rap/runtime/reduxLib'
import {RequestTypes} from './redux'

export interface IModels {
  /**
   * 接口名：示例接口
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=268793&mod=418701&itf=1768206
   */
  'GET/example/1603262772330': {
    Req: {
      /**
       * 请求属性示例
       */
      foo?: string
    }
    Res: {
      /**
       * 字符串属性示例
       */
      string: string
      /**
       * 数字属性示例
       */
      number: number
      /**
       * 布尔属性示例
       */
      boolean: boolean
      /**
       * 正则属性示例
       */
      regexp: string
      /**
       * 函数属性示例
       */
      function: string
      /**
       * 数组属性示例
       */
      array: {
        /**
         * 数组元素示例
         */
        foo: number
        /**
         * 数组元素示例
         */
        bar: string
      }[]
      /**
       * 自定义数组元素示例
       */
      items: any[]
      /**
       * 对象属性示例
       */
      object: {
        /**
         * 对象属性示例
         */
        foo: number
        /**
         * 对象属性示例
         */
        bar: string
      }
      /**
       * 占位符示例
       */
      placeholder: string
    }
  }
}

type ResSelector<T> = T

export interface IResponseTypes {
  'GET/example/1603262772330': ResSelector<IModels['GET/example/1603262772330']['Res']>
}

export function createFetch(fetchConfig: commonLib.RequesterOption, extraConfig?: {fetchType?: commonLib.FetchType}) {
  if (!extraConfig || !extraConfig.fetchType) {
    console.warn(
      'Rapper Warning: createFetch API will be deprecated, if you want to customize fetch, please use overrideFetch instead, since new API guarantees better type consistency during frontend lifespan. See detail https://www.yuque.com/rap/rapper/overridefetch'
    )
  }
  const rapperFetch = commonLib.getRapperRequest(fetchConfig)
  const sendRapperFetch = (modelName: keyof typeof RequestTypes, requestParams: commonLib.IUserFetchParams) => {
    const {extra} = requestParams
    if (extra && extra.type === 'normal') {
      return rapperFetch(requestParams)
    } else {
      const action = {
        type: '$$RAPPER_REQUEST',
        payload: {...requestParams, modelName, types: RequestTypes[modelName]},
      }
      return reduxLib.dispatchAction(action, rapperFetch)
    }
  }

  return {
    /**
     * 接口名：示例接口
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=268793&mod=418701&itf=1768206
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/example/1603262772330': (req?: IModels['GET/example/1603262772330']['Req'], extra?: commonLib.IExtra) => {
      return sendRapperFetch('GET/example/1603262772330', {
        url: '/example/1603262772330',
        method: 'GET',
        params: req,
        extra,
      }) as Promise<IResponseTypes['GET/example/1603262772330']>
    },
  }
}
