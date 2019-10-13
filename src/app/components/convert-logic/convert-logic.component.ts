import { Component, OnInit } from "@angular/core";
import Swal from "sweetalert2";

const checkValid = romanNumber => {
  if (/(.)\1\1\1/.test(romanNumber)) {
    return false;
  }

  for (const c of romanNumber) {
    if (!"MDCLXVI".includes(c)) {
      return false;
    }
  }

  return true;
};
@Component({
  selector: "app-convert-logic",
  templateUrl: "./convert-logic.component.html",
  styleUrls: ["./convert-logic.component.scss"]
})
export class ConvertLogicComponent implements OnInit {
  convertNumber: number;
  finalresult: string;
  // Method for Convert Number to roman
  convertToRoman() {
    let naturalNumber: number = this.convertNumber;
    // Roman Number characters
    const romanNumber: Array<string> = [
      "M",
      "CM",
      "D",
      "CD",
      "C",
      "XC",
      "L",
      "XL",
      "X",
      "IX",
      "V",
      "IV",
      "I"
    ];
    // Decimal number
    const normalNumber: Array<number> = [
      1000,
      900,
      500,
      400,
      100,
      90,
      50,
      40,
      10,
      9,
      5,
      4,
      1
    ];
    // Above 9999 Roman Needs special characters //
    if (naturalNumber <= 0 || naturalNumber > 3999) {
      this.convertNumber = null;
      this.finalresult = null;
      Swal.fire({
        title: "Value must be greater than 0 and less than 4000",
        animation: false,
        customClass: {
          popup: "animated tada"
        }
      });
      return false;
    }
    let romanNumeral: string;
    romanNumeral = "";
    for (let i = 0; i < romanNumber.length; i++) {
      while (naturalNumber >= normalNumber[i]) {
        naturalNumber -= normalNumber[i];
        romanNumeral += romanNumber[i];
      }
    }

    this.finalresult = romanNumeral;
  }

  convertToArabic() {
    let romanNumber: string = this.finalresult;

    const roman2arabic = s => {
      const map = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
      };
      return [...s].reduce(
        (r, c, i, s) => (map[s[i + 1]] > map[c] ? r - map[c] : r + map[c]),
        0
      );
    };

    if (checkValid(romanNumber)) {
      this.convertNumber = roman2arabic(romanNumber);
    } else {
      this.convertNumber = null;
      this.finalresult = null;
      Swal.fire({
        title: "Invalid Roman numeral entered",
        animation: false,
        customClass: {
          popup: "animated tada"
        }
      });
    }
  }
  ngOnInit() { }
}
