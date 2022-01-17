function reverse(string: string): string;
function reverse(stringArray: string[]): string[];
function reverse(stringOrStringArray: string | string[]) {
  if (typeof stringOrStringArray === "string") {
    return stringOrStringArray.split("").reverse().join();
  } else {
    return stringOrStringArray.slice().reverse();
  }
}

const hello = reverse("hello"); // "olleh"
const h_e_l_l_o = reverse(["h", "e", "l", "l", "o"]); // ["o", "l", "l", "e", "h"]

//---------------------------------------------------------
function makeDate(timestampOrYear: number, month: number, day: number): Date;
function makeDate(timestampOrYear: number): Date;
function makeDate(timestampOrYear: number, month?: number, day?: number): Date {
  if (month != null && day != null) {
    return new Date(timestampOrYear, month, day);
  } else {
    return new Date(timestampOrYear);
  }
}

const doomsday = makeDate(2020, 1, 1); // 1 Jan 2020
const epoch = makeDate(0); // 1 Jun 1970
