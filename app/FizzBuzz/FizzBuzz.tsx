import FizzElement from "@/app/FizzBuzz/FizzElement";

export default function FizzBuzz()
{
    const results = [];

    for (let i = 1; i <= 15; i++) {
        let val = "";

        if (i % 3 === 0) {
            val += "Fizz";
        }
        if (i % 5 === 0) {
            val += "Buzz";
        }
        if (i % 7 === 0) {
            val += "Zipp";
        }
        if (i % 9 === 0) {
            val += "Zapp";
        }
        if (i % 13 === 0) {
            val += "Zupp";
        }

        const valAsBool = val ? "true" : "false";
//
//         let valAsBool;
//
//         if (val){
//              valAsBool = "true";
//         }
//         else{
//              valAsBool = "false";
//         }
//
        const text = val + " " + valAsBool;

        results.push(<FizzElement key={i} value={text} />);

//        results.push(<div key={i}>{val || i}</div>);
    }

    return (
        <>
            {results}
        </>
    );
}
