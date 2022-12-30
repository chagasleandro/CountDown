import { useState } from 'react'

const useCountdown = (date) => {
    const countDate = new Date(date).getTime();
    const now = new Date().getTime();

    const interval = countDate - now;

    console.log(interval);

    return 1;
};

export default useCountdown;