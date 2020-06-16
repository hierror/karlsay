function repeatChar(char: string, n: number) {
    let str = '';

    for (let i = 0; i < n; i++)
        str += char;

    return str;
}

async function decodeText(filename: string) {
    const response = await fetch(filename);
    const text = await response.text();

    return text;
}

function insertString(text: string, str: string) {
    let upBorder = repeatChar('-', str.length + 2);
    let bottomBorder = repeatChar('-', str.length + 2);

    let temp = `       ${upBorder}
        ${str}
       ${bottomBorder}`;

    return temp + text;
}

const filename = 'https://raw.githubusercontent.com/hierror/karlsay/master/marx.txt';
const str = Deno.args[0];

decodeText(filename).then(((text) => {
    const output = insertString(text, str);

    console.log(output);
}));