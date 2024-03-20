const expenses = {
    "2023-01": {
        "01": {
            "food": [22.11, 43, 11.72, 2.2, 36.29, 2.5, 19],
            "fuel": [210.22]
        },
        "09": {
            "food": [11.9],
            "fuel": [190.22]
        }
    },
    "2023-03": {
        "07": {
            "food": [20, 11.9, 30.20, 11.9]
        },
        "04": {
            "food": [10.20, 11.50, 2.5],
            "fuel": []
        }
    },
    "2023-04": {}
};
function get_median_of_first_week_expanses(expanses) {
    let result = null;

    let tmp = [];

    for(const month in expanses) {
        if (Object.keys(expanses[month]).length === 0) continue;

        const firstSunday = getFirstSunday(month);

        for(const day in expenses[month]){
            if(parseInt(day) <= firstSunday){
                for(const category in expanses[month][day]){
                    tmp = tmp.concat(expenses[month][day][category]);
                }
            }
        }
    }

    if (tmp.length === 0) return null;

    tmp.sort((a,b) => a-b);

    const middle = Math.floor(tmp.length/2);
    if(tmp.length % 2 === 0){
        result = (tmp[middle - 1] + tmp[middle]) /2;
    }
    else{
        result = tmp[middle];
    }

    return result;
}

function getFirstSunday(month){
    const [year, monthNumber] = month.split('-');
    return new Date(year, monthNumber - 1, 1).getDay() === 0 ? 1 : 8 - new Date(year, monthNumber - 1, 1).getDay();
}

console.log(get_median_of_first_week_expanses(expenses));
