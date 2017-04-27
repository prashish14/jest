/**
 * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @flow
 */
'use strict';

export type Path = string;
export type Glob = string;

export type HasteConfig = {|
  defaultPlatform?: ?string,
  hasteImplModulePath?: string,
  platforms?: Array<string>,
  providesModuleNodeModules: Array<string>,
|};

export type ConfigGlobals = Object;

export type GlobalConfig = {|
  bail: boolean,
  collectCoverage: boolean,
  collectCoverageFrom: Array<Glob>,
  collectCoverageOnlyFrom: {[key: string]: boolean},
  coverageDirectory: string,
  coveragePathIgnorePatterns: Array<string>,
  coverageReporters: Array<string>,
  coverageThreshold: {global: {[key: string]: number}},
  expand: boolean,
  forceExit: boolean,
  logHeapUsage: boolean,
  logTransformErrors: ?boolean,
  mapCoverage: boolean,
  noStackTrace: boolean,
  notify: boolean,
  replname: ?string,
  rootDir: Path,
  silent: boolean,
  testNamePattern: string,
  testPathPattern: string,
  testResultsProcessor: ?string,
  updateSnapshot: boolean,
  useStderr: boolean,
  verbose: ?boolean,
  watch: boolean,
  watchman: boolean,
|};

export type ProjectConfig = {|
  automock: boolean,
  bail: boolean,
  browser: boolean,
  cache: boolean,
  cacheDirectory: Path,
  clearMocks: boolean,
  collectCoverage: boolean,
  collectCoverageFrom: Array<Glob>,
  collectCoverageOnlyFrom: {[key: string]: boolean},
  coverageDirectory: string,
  coveragePathIgnorePatterns: Array<string>,
  coverageReporters: Array<string>,
  coverageThreshold: {global: {[key: string]: number}},
  expand: boolean,
  forceExit: boolean,
  globals: ConfigGlobals,
  haste: HasteConfig,
  logHeapUsage: boolean,
  logTransformErrors: ?boolean,
  mapCoverage: boolean,
  moduleDirectories: Array<string>,
  moduleFileExtensions: Array<string>,
  moduleLoader: Path,
  moduleNameMapper: {[key: string]: string} | Array<[string, string]>,
  modulePathIgnorePatterns: Array<string>,
  modulePaths: Array<string>,
  name: string,
  noStackTrace: boolean,
  notify: boolean,
  preset: ?string,
  replname: ?string,
  resetMocks: boolean,
  resetModules: boolean,
  resolver: ?Path,
  rootDir: Path,
  roots: Array<Path>,
  setupFiles: Array<Path>,
  setupTestFrameworkScriptFile: Path,
  silent: boolean,
  snapshotSerializers: Array<Path>,
  testEnvironment: string,
  testMatch: Array<Glob>,
  testPathIgnorePatterns: Array<string>,
  testRegex: string,
  testResultsProcessor: ?string,
  testRunner: string,
  testURL: string,
  timers: 'real' | 'fake',
  transform: Array<[string, Path]>,
  transformIgnorePatterns: Array<Glob>,
  unmockedModulePathPatterns: ?Array<string>,
  useStderr: boolean,
  watchman: boolean,
|};

export type DefaultConfig = {|
  automock: boolean,
  bail: boolean,
  browser: boolean,
  cacheDirectory: Path,
  clearMocks: boolean,
  coveragePathIgnorePatterns: Array<string>,
  coverageReporters: Array<string>,
  expand: boolean,
  globals: ConfigGlobals,
  haste: HasteConfig,
  mapCoverage: boolean,
  moduleDirectories: Array<string>,
  moduleFileExtensions: Array<string>,
  moduleNameMapper: {[key: string]: string},
  modulePathIgnorePatterns: Array<string>,
  noStackTrace: boolean,
  notify: boolean,
  preset: ?string,
  resetMocks: boolean,
  resetModules: boolean,
  roots: Array<Path>,
  snapshotSerializers: Array<Path>,
  testEnvironment: string,
  testMatch: Array<Glob>,
  testPathIgnorePatterns: Array<string>,
  testRegex: string,
  testResultsProcessor: ?string,
  testURL: string,
  timers: 'real' | 'fake',
  transformIgnorePatterns: Array<Glob>,
  useStderr: boolean,
  verbose: ?boolean,
  watch: boolean,
|};

export type InitialConfig = {|
  automock?: boolean,
  bail?: boolean,
  browser?: boolean,
  cache?: boolean,
  cacheDirectory?: Path,
  clearMocks?: boolean,
  collectCoverage?: boolean,
  collectCoverageFrom?: Array<Glob>,
  collectCoverageOnlyFrom?: {[key: string]: boolean},
  coverageDirectory?: string,
  coveragePathIgnorePatterns?: Array<string>,
  coverageReporters?: Array<string>,
  coverageThreshold?: {global: {[key: string]: number}},
  expand?: boolean,
  forceExit?: boolean,
  globals?: ConfigGlobals,
  haste?: HasteConfig,
  logHeapUsage?: boolean,
  logTransformErrors?: ?boolean,
  mapCoverage?: boolean,
  moduleDirectories?: Array<string>,
  moduleFileExtensions?: Array<string>,
  moduleLoader?: Path,
  moduleNameMapper?: {[key: string]: string},
  modulePathIgnorePatterns?: Array<string>,
  modulePaths?: Array<string>,
  name?: string,
  noStackTrace?: boolean,
  notify?: boolean,
  preprocessorIgnorePatterns?: Array<Glob>,
  preset?: ?string,
  replname?: ?string,
  resetMocks?: boolean,
  resetModules?: boolean,
  resolver?: ?Path,
  rootDir: Path,
  roots?: Array<Path>,
  scriptPreprocessor?: string,
  setupFiles?: Array<Path>,
  setupTestFrameworkScriptFile?: Path,
  silent?: boolean,
  snapshotSerializers?: Array<Path>,
  testEnvironment?: string,
  testMatch?: Array<Glob>,
  testNamePattern?: string,
  testPathIgnorePatterns?: Array<string>,
  testRegex?: string,
  testResultsProcessor?: ?string,
  testRunner?: string,
  testURL?: string,
  timers?: 'real' | 'fake',
  transform?: {[key: string]: string},
  transformIgnorePatterns?: Array<Glob>,
  unmockedModulePathPatterns?: Array<string>,
  updateSnapshot?: boolean,
  useStderr?: boolean,
  verbose?: ?boolean,
  watch?: boolean,
  watchman?: boolean,
|};
