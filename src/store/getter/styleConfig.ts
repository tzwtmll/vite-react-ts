/*
 * @Author: pdd 483662261@qq.com
 * @Date: 2023-02-25 17:02:41
 * @LastEditors: pdd 483662261@qq.com
 * @LastEditTime: 2023-02-25 17:06:06
 * @Description:
 */
import { Store } from '@/types'
export const getLanguageEnv = (store: Store) => store.style.lang
export const getColorPrimary = (store: Store) => store.style.colorPrimary
