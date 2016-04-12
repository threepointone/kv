/* global describe, it */
import * as T from '../src'
import expect from 'expect'


describe('tree', () => {
  it('create', () => {
    let t = T.make()
    expect(T.toObject(t)).toEqual({})
  })
  it('set/get/del', () => {
    let t = T.make()
    expect(T.get(t, 'x')).toEqual(undefined)
    let t2 = T.set(t, 'x', 123)
    expect(T.get(t2, 'x')).toEqual(123)
    let t3 = T.del(t2, 'x')
    expect(T.toObject(t3)).toEqual({})
  })

  it('entries/toObject')

  it('lots of keys')
})
