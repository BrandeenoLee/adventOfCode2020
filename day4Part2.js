let input = `pid:087499704 hgt:74in ecl:grn iyr:2012 eyr:2030 byr:1980
hcl:#623a2f

eyr:2029 ecl:blu cid:129 byr:1989
iyr:2014 pid:896056539 hcl:#a97842 hgt:165cm

hcl:#888785
hgt:164cm byr:2001 iyr:2015 cid:88
pid:545766238 ecl:hzl
eyr:2022

iyr:2010 hgt:158cm hcl:#b6652a ecl:blu byr:1944 eyr:2021 pid:093154719`;

let fields = `byr
iyr
eyr
hgt
hcl
ecl
pid`.split("\n");

let lines = input.split("\n\n");

let count = 0;

function rule(x, v) {
  if (x == "byr") return v >= 1920 && v <= 2002;
  if (x == "iyr") return v >= 2010 && v <= 2020;
  if (x == "eyr") return v >= 2020 && v <= 2030;
  if (x == "hgt") {
    u = v.match(/^(\d+)(cm|in)$/);
    if (u && u[2] && u[2] == "in") {
      return u[1] >= 59 && u[1] <= 76;
    }
    if (u && u[2] && u[2] == "cm") {
      return u[1] >= 150 && u[1] <= 193;
    }
    return false;
  }
  if (x == "hcl") return /^#[0-9a-f]{6}$/.test(v);
  if (x == "ecl") return /^(amb|blu|brn|gry|grn|hzl|oth)$/.test(v);
  if (x == "pid") return /^\d{9}$/.test(v);
}

for (const line of lines) {
  if (
    fields.every((x) => {
      let re = new RegExp(x + ":(\\S+)");
      let m = line.replace(/\n/g, " ").match(re);
      if (m) return rule(x, m[1]);
    })
  ) {
    ++count;
  }
}

console.log("Valid passports: ", count);