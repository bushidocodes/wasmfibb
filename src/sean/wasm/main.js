import { runTests } from "../common/tests.js"


async function main() {

    const createGraph = window.Module.cwrap("createGraph", null);
    const insertEdge = window.Module.cwrap("insertEdge", "number", ["number", "number"]);
    const runBFS = window.Module.cwrap("runBFS", null, ["number"]);
    const getParent = window.Module.cwrap("getParent", "number", ["number"]);

    const compressData = window.Module.cwrap("compressData", "void");
    runTests(createGraph, insertEdge, runBFS, getParent, compressData);
}
Module['onRuntimeInitialized'] = onRuntimeInitialized;

function onRuntimeInitialized() {
    main();
}