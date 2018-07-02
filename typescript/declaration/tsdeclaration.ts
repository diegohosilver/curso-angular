/**
 * Typescript typed declaration
 */
let tName: string = "diego";
let tAge: number = 22;
let tSaved: boolean = true;

/**
 * Typescript functions
 */
function getTsPassword(clearTextPassword: boolean): string {
    if (clearTextPassword) {
        return "password";
    }

    return "********";
}