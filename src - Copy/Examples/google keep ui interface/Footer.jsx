import react, { useState } from 'react';

export default function Footer() {
    const year = new Date().getFullYear(); // Updated years will be shown
    return(
        <>
            <div class="text-center text-primary"> Copyrights {year} </div>
        </>
    )
}