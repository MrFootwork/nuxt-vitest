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
	it('multiplies', () => {
		expect(calculator.multiply(10, 2)).toBe(20)
		expect(calculator.multiply(0, 0)).toBe(0)
		expect(calculator.multiply(12, 1)).toBe(12)
	})
	it('divides', () => {
		expect(calculator.divide(10, 2)).toBe(5)
		expect(calculator.divide(0, 0)).toBe(NaN)
		expect(calculator.divide(12, 1)).toBe(12)
	})
})
