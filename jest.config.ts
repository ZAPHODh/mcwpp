import nextJest from 'next/jest'
import { Config } from '@jest/types'
const createJestConfig = nextJest({
    dir: './',
})

/** @type {import('jest').Config} */
const config: Config.InitialOptions = {
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    testEnvironment: 'jest-environment-jsdom',
    preset: 'ts-jest',
}

export default createJestConfig(config)
