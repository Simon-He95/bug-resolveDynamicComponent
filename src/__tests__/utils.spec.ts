/*
 * @Author: wangrui
 * @Description: 测试工具函数
 * @Date: 2022-08-19 19:31:04
 * @LastEditors: wangrui
 * @LastEditTime: 2022-08-19 19:32:56
 */
import { describe, expect, it } from 'vitest'
import { add } from '@/utils/index'
describe('utils工具测试', () => {
  it('test add Function', () => {
    
    const result = add(1, 2)
    expect(result).toBe(3)
  })
})
