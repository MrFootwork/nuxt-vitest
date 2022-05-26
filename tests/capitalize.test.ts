import { describe, expect, it } from 'vitest'
import capitalize from '../model/capitalize'

describe('capitalize', () => {
	it('returns capitalized string', () => {
		expect(capitalize('klein')).toBe('Klein')
		expect(capitalize('groß')).toBe('Groß')
	})
	it('does nothing with empty strings', () => {
		expect(capitalize('')).toBe('')
	})
})
