import { describe, expect, it } from 'vitest'
import reverseString from '../model/reverseString'

describe('reverseString', () => {
	it('reverses string', () => {
		expect(reverseString('test')).toBe('tset')
		expect(reverseString('groß')).toBe('ßorg')
	})
	it('returns empty string', () => {
		expect(reverseString('')).toBe('')
	})
})
