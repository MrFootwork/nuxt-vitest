import { describe, expect, it } from 'vitest'
import analyzeArray from '../model/analyzeArray'

const sampleArray = [1, 8, 3, 4, 2, 6]

describe('Array analytics', () => {
	it('returns four properties', () => {
		const analyticsObject = analyzeArray(sampleArray)
		const objectKeys = Object.keys(analyticsObject)
		expect(objectKeys.length).toBe(4)
	})
	it('determines length', () => {
		const { length } = analyzeArray(sampleArray)
		expect(length).toBe(6)
	})
	it('determines minimum', () => {
		const { min } = analyzeArray(sampleArray)
		expect(min).toBe(1)
	})
	it('determines maximum', () => {
		const { max } = analyzeArray(sampleArray)
		expect(max).toBe(8)
	})
	it('determines average', () => {
		const { average } = analyzeArray(sampleArray)
		expect(average).toBe(4)
	})
})
