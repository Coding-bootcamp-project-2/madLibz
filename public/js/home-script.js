/*FORM DATA*/
const regex = /[*^~]/g;
const madlibContainer = document.querySelector(".madlib-container");

const spliceFunction = (lib, noun, verb, adj) => {
    const libArray = lib.split(regex);
    const newerLib = libArray[0] + noun + libArray[1] + adj + libArray[2] + verb + libArray[3];
    console.log(libArray);
    console.log(newerLib);
    madlibContainer.textContent = newerLib;
};

const madlibGET = async () => {
    try {
        const response = await fetch("/madlibz", {
            method: "GET",
        });
        if (response.ok) {
            const data = await response.json();
            console.log("GET call made", data);
            spliceFunction(data, "bike", "run", "fast");
        } else {
            throw new Error("Network response was not ok");
        }
    } catch (error) {
        console.log(error);
    }
};

madlibGET(); 




//THIS IS JUST A TEMPLATE VARIABLES NEED ADJUSTED

// const noun = "bike"; /*FORM DATA*/
// const verb = "run"; /*FORM DATA*/
// const adj = "fast"; /*FORM DATA*/

// const spliceFunction = (lib) => {
//     const regex = /[*^~]/g;
//     const libArray = lib.split(regex);
//     const newerLib = libArray[0] + noun + libArray[1] + adj + libArray[2] + verb + libArray[3];
//     console.log(libArray);
//     console.log(newerLib);
//     return newerLib;

// };

// const madlibGET = async () => {
//     try {
//         const response = await fetch("/madlibz", {
//             method: "GET",
//         });
//         const data = await response.json();
//         console.log("GET call made", data);
//         spliceFunction(data);
//     } catch (error) {
//         console.log(error);
//     }
// };

// madlibGET();

// //THIS IS JUST A TEMPLATE VARIABLES NEED ADJUSTED

// const noun = "bike"; /*FORM DATA*/
// const verb = "run"; /*FORM DATA*/
// const adj = "fast"; /*FORM DATA*/

// const spliceFunction = (lib) => {
//     const libArray = lib.split("*");
//     const newerLib = libArray[0] + noun + libArray[1];

//     const newLibArray = newerLib.split("^");
//     const newererLib = newLibArray[0] + adj + newLibArray[1];

//     const newerLibArray = newererLib.split("~");
//     const finishedLib = newerLibArray[0] + verb + newerLibArray[1];

//     console.log(libArray);
//     console.log(finishedLib);
//     return finishedLib;
// };

// const madlibGET = fetch("/madlibz", {
//     method: "GET",
// })
//     .then((res) => res.json())
//     .then((data) => {
//         console.log("GET call made", data);
//         spliceFunction(data);
//     })
