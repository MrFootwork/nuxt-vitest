import { describe, expect, it } from 'vitest'
import cipher from '../model/cipher'

describe('calculator SHIFT = 1', () => {
	it('keeps case', () => {
		expect(cipher('aBcDeF')).toBe('bCdEfG')
	})
	it('keeps punctuation', () => {
		expect(cipher(',. -')).toBe(',. -')
	})
	it('shifts simply', () => {
		expect(cipher('abcdez')).toBe('bcdefa')
		expect(cipher('ABCDEFZ')).toBe('BCDEFGA')
		expect(cipher('vwxyz')).toBe('wxyza')
	})
	it('shifts correctly', () => {
		expect(cipher('Abc. Zde')).toBe('Bcd. Aef')
	})
})
