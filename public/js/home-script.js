//THIS IS JUST A TEMPLATE VARIABLES NEED ADJUSTED

const noun = "bike"; /*FORM DATA*/
const verb = "run"; /*FORM DATA*/
const adj = "fast"; /*FORM DATA*/

const spliceFunction = (lib) => {
    const libArray = lib.split("*");
    const newerLib = libArray[0] + noun + libArray[1];

    const newLibArray = newerLib.split("^");
    const newererLib = newLibArray[0] + adj + newLibArray[1];

    const newerLibArray = newererLib.split("~");
    const finishedLib = newerLibArray[0] + verb + newerLibArray[1];

    console.log(libArray);
    console.log(finishedLib);
    return finishedLib;
};

const madlibGET = fetch("/madlibz", {
    method: "GET",
})
    .then((res) => res.json())
    .then((data) => {
        console.log("GET call made", data);
        spliceFunction(data);
    })
