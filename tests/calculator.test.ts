import { describe, expect, it } from 'vitest'
import calculator from '../model/calculator'

describe('calculator', () => {
	it('adds', () => {
		expect(calculator.add(1, 2)).toBe(3)
		expect(calculator.add(0, 0)).toBe(0)
	})
	it('subtracts', () => {
		expect(calculator.subtract(10, 2)).toBe(8)
		expect(calculator.subtract(0, 0)).toBe(0)
	})
})
