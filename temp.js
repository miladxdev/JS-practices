
{
    let x = 3;
    {   
        let x = 4;
        x++;
        console.log(x);
    }
    console.log(x);
}

// Nullish coalescing operator '??'

let name = '';
console.log(name ?? 'Anonymous'); // result = (a !== null && a !== undefined) ? a : b;
console.log(name || 'Anonymous'); // || returns the first truthy value.