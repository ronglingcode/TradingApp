/**
 * Get time zone offset for NY, USA
 */
export const getNewYorkOffset = () => {
    let now = new Date();
    if (isDayLightSavingTimeObserved(now)) {
        return 4 * 60;
    } else {
        return 5 * 60;
    }
}

export const isDayLightSavingTimeObserved = (dt: Date) => {
    return dt.getTimezoneOffset() < stdTimezoneOffset();
}
const stdTimezoneOffset = () => {
    var jan = new Date(0, 1)
    var jul = new Date(6, 1)
    return Math.max(jan.getTimezoneOffset(), jul.getTimezoneOffset())
}

export const getTimeZoneOffsetFromNewYork = () => {
    let now = new Date();
    let offset = now.getTimezoneOffset();
    let nyOffset = getNewYorkOffset();
    return offset - nyOffset;
}
export const getMarketOpenTimeInLocal = () => {
    let nyOpen = new Date();
    nyOpen.setHours(9);
    nyOpen.setMinutes(30);
    nyOpen.setSeconds(0);
    nyOpen.setMilliseconds(0);
    return nyTimeToLocal(nyOpen);
}

export const getMarketCloseTimeInLocal = () => {
    let nyClose = new Date();
    nyClose.setHours(16);
    nyClose.setMinutes(0);
    nyClose.setSeconds(0);
    nyClose.setMilliseconds(0);
    return nyTimeToLocal(nyClose);
}

export const getDayTradingStartTimeInlocal = (currentDayStr: string) => {
    let nyTime = new Date(`${currentDayStr} 01:00`);
    return nyTimeToLocal(nyTime);

};
export const nyTimeToLocal = (nyTime: Date) => {
    let offset = getTimeZoneOffsetFromNewYork();
    let localTime = new Date(nyTime.getTime() - offset * 60 * 1000);
    return localTime;
}

export const localTimeToNewYorkTime = (localTime: Date) => {
    let offset = getTimeZoneOffsetFromNewYork();
    let nyTime = new Date(localTime.getTime() + offset * 60 * 1000);
    return nyTime;
}

export const isMarketOpen = () => {
    let now = new Date();
    let openTime = getMarketOpenTimeInLocal();
    let closeTime = getMarketCloseTimeInLocal();
    return openTime <= now && now <= closeTime;
}
export const isBeforeMarketOpenHours = (localTime: Date) => {
    let openTime = getMarketOpenTimeInLocal();
    let openHours = openTime.getHours();
    let openMinutes = openTime.getMinutes();
    let currentHours = localTime.getHours();
    let currentMinutes = localTime.getMinutes();
    return currentHours < openHours || (currentHours == openHours && currentMinutes < openMinutes);
}
export const getDateString = (date: Date) => {
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let monthString = `${month}`;
    if (month < 10) {
        monthString = `0${month}`;
    }
    let day = date.getDate();
    let dayString = `${day}`;
    if (day < 10) {
        dayString = `0${day}`
    }
    return `${year}-${monthString}-${dayString}`;
}
export const getTodayString = () => {
    let now = new Date();
    return getDateString(now);
}

export const getTomorrowString = () => {
    let now = new Date();
    let tomorrow = new Date(now.getTime() + 24 * 3600 * 1000);
    return getDateString(tomorrow);
}

export const getYesterdayString = () => {
    let now = new Date();
    let y = new Date(now.getTime() - 24 * 3600 * 1000);
    return getDateString(y);
}