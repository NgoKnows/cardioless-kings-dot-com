const puppeteer = require("puppeteer");

(async () => {
  const teamName = "Indy Green Monster \\(WED\\)";

  // Launch a new browser instance
  const browser = await puppeteer.launch();

  // Open a new page
  const page = await browser.newPage();

  // Navigate to a URL
  await page.goto("https://pugetsoundbasketball.com/schedule/?day=wednesday");

  // Take a screenshot
  const element = await page.waitForSelector(`a ::-p-text(${teamName})`, {
    timeout: 2000,
  });

  const data = await page.$$eval("tr", (eles: any) => {
    const teamName = "Indy Green Monster \\(WED\\)";
    return eles
      .filter((ele: any) => ele.textContent.includes("Indy"))
      .map((ele: any) => {
        const officialOne = ele.querySelector(".official_one").textContent;
        const officialTwo = ele.querySelector(".official_two").textContent;
        const time = ele.querySelector(".time").textContent;
        const gym = ele.querySelector(".gym a").textContent;

        const teams = Array.from(ele.querySelectorAll(".team")) as any;
        const homeTeam = teams[0].textContent;
        const awayTeam = teams[1].textContent;
        const isHome = homeTeam === teamName;

        return {
          officialOne,
          officialTwo,
          time,
          gym,
          homeTeam,
          awayTeam,
          isHome,
        };
      });
  });

  console.log("data", data);
  // Close the browser
  await browser.close();
})();

// [
//   {
//     officialOne: 'Strother',
//     officialTwo: 'Aranza',
//     time: '06:05 pm',
//     gym: 'Seattle Central College #1 ',
//     homeTeam: 'Switching Back And Forth',
//     awayTeam: 'Indy Green Monster (WED)',
//     isHome: false
//   },
//   {
//     officialOne: 'Strother',
//     officialTwo: 'Aranza',
//     time: '07:00 pm',
//     gym: 'Seattle Central College #1 ',
//     homeTeam: 'Roe vs. D. Wade (Wed)',
//     awayTeam: 'Indy Green Monster (WED)',
//     isHome: false
//   }
// ]
