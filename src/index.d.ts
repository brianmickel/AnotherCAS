export function run(script: string): string;
export function exec(fn: string, arg: string): unknown;
export function init(): void;
export function clearAlgebraEnvironment(): void;
export function findDependenciesInScript(script: string): unknown;
export function computeDependenciesFromAlgebra(script: string): unknown;
export function computeResultsAndJavaScriptFromAlgebra(script: string): unknown;
