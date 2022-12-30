import { useState } from 'react'

const useCountdown = (date) => {
    const countDate = new Date(date).getTime();
    const now = new Date().getTime();

    console.log(countDate, now);

    return 1;
};

export default useCountdown;