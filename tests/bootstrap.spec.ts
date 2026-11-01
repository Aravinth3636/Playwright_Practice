import{test,expect,Locator} from 'playwright/test'


test('Booking.com Date Picker Test - Check-in and Check-out', async ({ page }) => {

    await page.goto('https://www.booking.com/');

    // Click on the date picker field to open calendar
    await page.getByTestId('searchbox-dates-container').click();

    // ==== Check-in Date Selection ====
    let checkinYear: string = "2026";
    let checkinMonth: string = "October";
    let checkinDay: string = "28";

    // Navigate through the calendar to find the desired check-in month and year
    while (true) {
        const checkinMonthYear = await page.locator("h3[id='bui-calendar-month-2026-9']").nth(0).innerText();
        const currentMonth = checkinMonthYear.split(" ")[0];
        const currentYear = checkinMonthYear.split(" ")[1];

        if (currentMonth === checkinMonth && currentYear === checkinYear) {
            break;
        } else {
            await page.locator('button[aria-label="Next month"]').click();
        }
    }

    // Select the specific check-in date
    let allDates = await page.locator('table.b8fcb0c66a tbody').nth(0).locator('td').all();
    let checkinDateSelected = false;

    for (let date of allDates) {
        const dateText = await date.innerText();

        if (dateText === checkinDay) {
            await date.click();
            checkinDateSelected = true;
            break;
        }
    }

    await page.waitForTimeout(3000);

    expect(checkinDateSelected).toBeTruthy();
});

