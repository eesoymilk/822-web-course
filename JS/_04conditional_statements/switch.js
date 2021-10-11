const cardinal = 11;
const least_significant_bit = cardinal % 10;
const tens_digit = Math.floor(cardinal / 10) % 10;
let ordinal = `${cardinal}`;

switch (least_significant_bit) {
    case 1:
        if (tens_digit !== 1)
            ordinal += 'st';
        else
            ordinal += 'th';
        break;
    case 2:
        ordinal += 'nd';
        break;
    case 3:
        ordinal += 'rd';
        break;
    default:
        ordinal += 'th';
}

document.write(`Cardinal form: ${cardinal}<br/>`);
document.write(`Ordinal form: ${ordinal}<br/>`);